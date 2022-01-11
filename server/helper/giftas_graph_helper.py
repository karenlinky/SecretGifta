import random

class GiftasGraphHelper:
    def __init__(self, num_giftas: int):
        self.num_giftas = num_giftas
        self.graph = []
        for i in range(num_giftas):
            row = []
            for j in range(num_giftas):
                row.append(1 if i != j else 0)
            self.graph.append(row)

    def _get_num_link(self, gifta_index, outlink: bool):
        count = 0
        for i in range(self.num_giftas):
            if outlink:
                if self.graph[gifta_index][i] == 1:
                    count = count + 1
            else:
                if self.graph[i][gifta_index] == 1:
                    count = count + 1
        return count
        

    def get_num_outlink(self, gifta_index):
        return self._get_num_link(gifta_index, True)

    def get_num_inlink(self, gifta_index):
        return self._get_num_link(gifta_index, False)

    def _get_min_link(self, skipped_indices, outlink: bool):   
        result = {
            "found": False,
            "index": 0,
            "num": 0,
        }
        
        if self.num_giftas <= 0:
            return result

        for i in range(self.num_giftas):
            if i in skipped_indices:
                continue
            num_link = self.get_num_outlink(i) if outlink else self.get_num_inlink(i)
            if num_link > 0:
                if not result['found'] or num_link < result['num']:
                    result = {
                        "found": True,
                        "index": i,
                        "num": num_link
                    }
        return result

    def get_min_outlink(self, skipped_indices):
        return self._get_min_link(skipped_indices, True)

    def get_min_inlink(self, skipped_indices):
        return self._get_min_link(skipped_indices, False)

    def get_min_index(self, skipped_out_indices, skipped_in_indices):
        min_outlink = self.get_min_outlink(skipped_out_indices)
        min_inlink = self.get_min_inlink(skipped_in_indices)
        return {
            "index": min_outlink['index'] if min_outlink['num'] < min_inlink['num'] else min_inlink['index'],
            "outlink": min_outlink['num'] < min_inlink['num'],
        }

    def randomize_outlink_target(self, out_index):
        num_possible_outlink = self.get_num_outlink(out_index)
        position = random.randint(0, num_possible_outlink - 1)

        for i in range(self.num_giftas):
            if self.graph[out_index][i] == 1:
                if position == 0:
                    return i
                else:
                    position = position - 1
        return 0

    def randomize_inlink_target(self, in_index):
        num_possible_inlink = self.get_num_inlink(in_index)
        position = random.randint(0, num_possible_inlink - 1)

        for i in range(self.num_giftas):
            if self.graph[i][in_index] == 1:
                if position == 0:
                    return i
                else:
                    position = position - 1
        return 0

    def mark_taken(self, out_index, in_index):
        self.graph[out_index][in_index] = 0

    def mark_taken_along_with_neighbours(self, out_index, in_index):
        for i in range(self.num_giftas):
            self.graph[out_index][i] = 0
            self.graph[i][in_index] = 0

    def get_copy_graph(self):
        graph = []
        for i in range(self.num_giftas):
            graph.append(self.graph[i].copy())
        return graph

    def set_graph(self, graph):
        self.graph = graph