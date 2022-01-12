from helper.sql_helper import SqlHelper
from queries.database_constants import DatabaseConstants

class GiftasQueries:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.table_name = DatabaseConstants.EVENT_GIFTAS_TABLE
        self.event_col = DatabaseConstants.EVENT_GIFTAS_EVENT_ID_COL
        self.gifta_col = DatabaseConstants.EVENT_GIFTA_COL
        self.giftee_col = DatabaseConstants.EVENT_GIFTEE_COL

    def _insert_giftas_pair(self, event_id, gifta_id, giftee_id):
        query = 'INSERT INTO {table_name} ({event_col}, {gifta_col}, {giftee_col}) VALUES ({event_id}, {gifta_id}, {giftee_id});'.format(
            table_name = self.table_name,
            event_col = self.event_col,
            gifta_col = self.gifta_col,
            giftee_col = self.giftee_col,
            event_id = event_id,
            gifta_id = gifta_id,
            giftee_id = giftee_id,
        )
        self.db.execute(query)

    def insert_matched_giftas(self, event_id, matched_giftas):
        for gifta_id in matched_giftas:
            for giftee_id in matched_giftas[gifta_id]:
                self._insert_giftas_pair(event_id, gifta_id, giftee_id)

    def get_table_name(self):
        return self.table_name

    def get_event_col(self):
        return self.event_col

    def get_gifta_col(self):
        return self.gifta_col

    def get_gifta_id(self, event_id, requester_id):
        query = 'SELECT DISTINCT {gifta_col} FROM {table_name} WHERE {event_col} = {event_id};'.format(
            table_name = self.table_name,
            event_col = self.event_col,
            event_id = event_id,
            gifta_col = self.gifta_col
        )
        
        return self.db.execute_and_return(query)

    def get_giftee_id(self, event_id, requester_id):
        query = 'SELECT {giftee_col} FROM {table_name} WHERE {event_col} = {event_id} AND {gifta_col} = {requester_id};'.format(
            table_name = self.table_name,
            event_col = self.event_col,
            event_id = event_id,
            gifta_col = self.gifta_col,
            requester_id = requester_id,
            giftee_col = self.giftee_col
        )
        
        return self.db.execute_and_return(query)
