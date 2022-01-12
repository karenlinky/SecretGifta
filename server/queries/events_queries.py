from helper.sql_helper import SqlHelper
from queries.giftas_queries import GiftasQueries
from queries.database_constants import DatabaseConstants
from time import gmtime, strftime

class EventsQueries:
    def __init__(self, db: SqlHelper):
        self.giftas_queries = GiftasQueries(db)
        self.db = db
        self.table_name = DatabaseConstants.EVENT_TABLE
        self.id_col = DatabaseConstants.EVENT_ID_COL
        self.host_col = DatabaseConstants.EVENT_HOST_COL
        self.name_col = DatabaseConstants.EVENT_NAME_COL
        self.date_col = DatabaseConstants.EVENT_DATE_COL
        self.min_col = DatabaseConstants.EVENT_MIN_COL
        self.max_col = DatabaseConstants.EVENT_MAX_COL
        self.number_col = DatabaseConstants.EVENT_NUMBER_COL
        self.create_date_col = DatabaseConstants.EVENT_CREATE_DATE_COL
        self.last_modified_date_col = DatabaseConstants.EVENT_LAST_MODIFIED_DATE_COL

    def create_event(self, host_id, name, date, min, max, number, matched_giftas):
        current_date = strftime("%Y-%m-%d %H:%M:%S", gmtime())
        query = 'INSERT INTO {table_name} ({host_col}, {name_col}, {date_col}, {min_col}, {max_col}, {number_col}, {create_date_col}, {last_modified_date_col}) VALUES ({host_id}, "{name}", "{date}", {min}, {max}, {number}, "{create_date}", "{last_modified_date}");'.format(
            table_name = self.table_name,
            host_col = self.host_col,
            name_col = self.name_col,
            date_col = self.date_col,
            min_col = self.min_col,
            max_col = self.max_col,
            number_col = self.number_col,
            create_date_col = self.create_date_col,
            last_modified_date_col = self.last_modified_date_col,
            host_id = host_id,
            name = name,
            date = date,
            min = min,
            max = max,
            number = number,
            create_date = current_date,
            last_modified_date = current_date,
        )
        self.db.execute(query)

        event_id = self.db.get_last_inserted_id()

        self.giftas_queries.insert_matched_giftas(event_id, matched_giftas)
        
        self.db.commit()

    def get_event(self, event_id, requester_id):
        query = 'SELECT {id_col}, {name_col}, {date_col}, {min_col}, {max_col} FROM {table_name} JOIN (SELECT DISTINCT {event_col} FROM {giftas_table_name} WHERE {event_col} = {event_id} AND {gifta_id} = {requester_id}) As {participating_table_alias} ON {table_name}.{id_col} = {participating_table_alias}.{event_col};'.format(
            table_name = self.table_name,
            id_col = self.id_col,
            name_col = self.name_col,
            date_col = self.date_col,
            min_col = self.min_col,
            max_col = self.max_col,
            event_id = event_id,
            event_col = self.giftas_queries.get_event_col(),
            giftas_table_name = self.giftas_queries.get_table_name(),
            gifta_id = self.giftas_queries.get_gifta_col(),
            requester_id = requester_id,
            participating_table_alias = 'ParticipatingEvents'
        )

        return self.db.execute_and_return(query)

    def get_events(self, requester_id):
        query = 'SELECT {id_col}, {name_col}, {date_col}, {min_col}, {max_col} FROM {table_name} JOIN (SELECT DISTINCT {event_col} FROM {giftas_table_name} WHERE {gifta_id} = {requester_id}) As {participating_table_alias} ON {table_name}.{id_col} = {participating_table_alias}.{event_col} ORDER BY {date_col} DESC;'.format(
            table_name = self.table_name,
            id_col = self.id_col,
            name_col = self.name_col,
            date_col = self.date_col,
            min_col = self.min_col,
            max_col = self.max_col,
            event_col = self.giftas_queries.get_event_col(),
            giftas_table_name = self.giftas_queries.get_table_name(),
            gifta_id = self.giftas_queries.get_gifta_col(),
            requester_id = requester_id,
            participating_table_alias = 'ParticipatingEvents'
        )

        return self.db.execute_and_return(query)
        