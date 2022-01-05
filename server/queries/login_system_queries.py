from helper.sql_helper import SqlHelper

class LoginSystemQueries:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.table_name = "Users"
        self.username_col = "Username"
        self.password_col = "Password"

    def check_user_exists(self, username):
        query = 'SELECT * FROM ' + self.table_name + ' WHERE ' + self.username_col + ' = "' + username + '";'
        return len(self.db.execute_and_return(query)) != 0

    def add_user(self, username, hashed_password):
        query = 'INSERT INTO {table_name} ({username_col}, {password_col}) VALUES ("{username}", "{password}");'.format(
            table_name = self.table_name,
            username_col = self.username_col,
            password_col = self.password_col,
            username = username,
            password = hashed_password)
        self.db.execute(query)
        self.db.commit()
