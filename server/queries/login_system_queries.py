from helper.sql_helper import SqlHelper
from queries.database_constants import DatabaseConstants

class LoginSystemQueries:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.table_name = DatabaseConstants.USER_TABLE
        self.username_col = DatabaseConstants.USER_USERNAME_COL
        self.password_col = DatabaseConstants.USER_PASSWORD_COL

    def check_user_exists(self, username):
        result = self.get_user_info(username)
        return len(result) != 0

    def add_user(self, username, hashed_password):
        query = 'INSERT INTO {table_name} ({username_col}, {password_col}) VALUES ("{username}", "{password}");'.format(
            table_name = self.table_name,
            username_col = self.username_col,
            password_col = self.password_col,
            username = username,
            password = hashed_password)
        self.db.execute(query)
        self.db.commit()

    def get_user_info(self, username):
        query = query = 'SELECT * FROM ' + self.table_name + ' WHERE ' + self.username_col + ' = "' + username + '";'
        return self.db.execute_and_return(query)
