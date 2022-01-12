from helper.sql_helper import SqlHelper
from helper.giftas_graph_helper import GiftasGraphHelper
from queries.user_queries import UserQueries
from queries.events_queries import EventsQueries
from queries.giftas_queries import GiftasQueries
from datetime import datetime

class Event:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.user_queries = UserQueries(self.db)
        self.event_queries = EventsQueries(self.db)
        self.giftas_queries = GiftasQueries(self.db)

    def _match_giftas(self, giftas, number):
        num_giftas = len(giftas)
        graph = GiftasGraphHelper(num_giftas)
        temp_graph = GiftasGraphHelper(num_giftas)

        flip_needed = num_giftas / 2 <= number

        result = {}
        if flip_needed:
            number = num_giftas - 1 - number
            for i in range(num_giftas):
                result[i] = []
                for j in range(num_giftas):
                    if i != j:
                        result[i].append(j)

        for i in range(number):
            skipped_out_indices = []
            skipped_in_indices = []
            temp_graph.set_graph(graph.get_copy_graph())
            for j in range(num_giftas):
                min_index = temp_graph.get_min_index(skipped_out_indices, skipped_in_indices)
                index = min_index['index']
                outlink = min_index['outlink']

                if outlink:
                    out_index = index
                    in_index = temp_graph.randomize_outlink_target(index)
                else:
                    in_index = index
                    out_index = temp_graph.randomize_inlink_target(index)

                graph.mark_taken(out_index, in_index)
                temp_graph.mark_taken_along_with_neighbours(out_index, in_index)
                skipped_out_indices.append(out_index)
                skipped_in_indices.append(in_index)

                if flip_needed:
                    result[out_index].remove(in_index)
                else:
                    if out_index in result:
                        result[out_index].append(in_index)
                    else:
                        result[out_index] = [in_index]

        matched_giftas = {}
        for i in range(num_giftas):
            matched_giftas[giftas[i]] = []
            recievers = result[i]
            for reciever in recievers:
                matched_giftas[giftas[i]].append(giftas[reciever])

        return matched_giftas
        

    def create_event(self, request, requester_id):
        data = request.get_json()
        giftas_array = data['giftas']
        host_id = requester_id
        name = data['name']
        date = datetime.fromisoformat(data['date'][:-1]).strftime('%Y-%m-%d %H:%M:%S')
        min = data['min']
        max = data['max'] if data['max'] != '' else 'NULL'
        number = data['number']

        giftas = [requester_id]
        for gifta in giftas_array:
            giftas.append(gifta['id'])

        matched_giftas = self._match_giftas(giftas, number)

        self.event_queries.create_event(host_id, name, date, min, max, number, matched_giftas)

        return {"success" : True}

    def form_event(self, event, requester_id):
        event_id = event[0]
        event_result = {}
        event_result["id"] = event_id
        event_result["name"] = event[1]
        event_result["date"] = event[2]
        event_result["min"] = event[3]
        event_result["max"] = event[4]
        event_result['giftas'] = []
        participants_ids = self.giftas_queries.get_gifta_id(event_id, requester_id)
        for participants_id in participants_ids:
            id = participants_id[0]
            participants_info = {}
            participants_id_name = self.user_queries.search_user_by_id(id)
            participants_info['id'] = id
            participants_info['username'] = participants_id_name[0][1]
            event_result['giftas'].append(participants_info)

        event_result['giftee'] = []
        giftee_ids = self.giftas_queries.get_giftee_id(event_id, requester_id)
        for giftee_id in giftee_ids:
            id = giftee_id[0]
            giftee_info = {}
            giftee_id_name = self.user_queries.search_user_by_id(id)
            giftee_info['id'] = id
            giftee_info['username'] = giftee_id_name[0][1]
            event_result['giftee'].append(giftee_info)
        return event_result

    def get_event(self, request, requester_id):
        event_id = request.args.get("event_id")
        events = self.event_queries.get_event(event_id, requester_id)
        if len(events) == 0:
            return []
        return {"event": [self.form_event(events[0], requester_id)]}
        

    def get_events(self, requester_id):
        events = self.event_queries.get_events(requester_id)

        events_result = []
        for event in events:
            events_result.append(self.form_event(event, requester_id))
            # event_id = event[0]
            # event_result = {}
            # event_result["id"] = event_id
            # event_result["name"] = event[1]
            # event_result["date"] = event[2]
            # event_result["min"] = event[3]
            # event_result["max"] = event[4]
            # event_result['giftas'] = []
            # participants_ids = self.giftas_queries.get_gifta_id(event_id, requester_id)
            # for participants_id in participants_ids:
            #     id = participants_id[0]
            #     participants_info = {}
            #     participants_id_name = self.user_queries.search_user_by_id(id)
            #     participants_info['id'] = id
            #     participants_info['username'] = participants_id_name[0][1]
            #     event_result['giftas'].append(participants_info)

            # event_result['giftee'] = []
            # giftee_ids = self.giftas_queries.get_giftee_id(event_id, requester_id)
            # for giftee_id in giftee_ids:
            #     id = giftee_id[0]
            #     giftee_info = {}
            #     giftee_id_name = self.user_queries.search_user_by_id(id)
            #     giftee_info['id'] = id
            #     giftee_info['username'] = giftee_id_name[0][1]
            #     event_result['giftee'].append(giftee_info)
                
            # events_result.append(event_result)

        return {"events": events_result}

