from helper.sql_helper import SqlHelper
from queries.database_constants import DatabaseConstants

class UserQueries:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.table_name = DatabaseConstants.USER_TABLE
        self.id_col = DatabaseConstants.USER_ID_COL
        self.username_col = DatabaseConstants.USER_USERNAME_COL

    def search_user_by_username(self, username):
        query = 'SELECT {id_col}, {username_col} FROM {table_name} WHERE {username_col} LIKE "%{username}%";'.format(
            id_col = self.id_col,
            table_name = self.table_name,
            username_col = self.username_col,
            username = username)
        return self.db.execute_and_return(query)

    def search_user_by_id(self, id):
        query = 'SELECT {id_col}, {username_col} FROM {table_name} WHERE {id_col} = {id};'.format(
            id_col = self.id_col,
            table_name = self.table_name,
            username_col = self.username_col,
            id = id)
        return self.db.execute_and_return(query)