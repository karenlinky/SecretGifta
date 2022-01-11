from helper.sql_helper import SqlHelper
from helper.giftas_graph_helper import GiftasGraphHelper
# from queries.user_queries import UserQueries

class Event:
    def __init__(self, db: SqlHelper):
        self.db = db
        # self.user_queries = UserQueries(self.db)

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
        number = data['number']
        giftas = [requester_id]
        for gifta in giftas_array:
            giftas.append(gifta['id'])

        matched_giftas = self._match_giftas(giftas, number)

        return matched_giftas
