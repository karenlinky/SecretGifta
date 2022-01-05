from helper.sql_helper import SqlHelper
from queries.login_system_queries import LoginSystemQueries

class LoginSystem:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.login_system_queries = LoginSystemQueries(self.db)

    def register(self, request):
        data = request.get_json()
        username = data["username"]
        password = data["password"]

        userExists = self.login_system_queries.check_user_exists(username)

        if userExists:
            return {"success": False}

        self.login_system_queries.add_user(username, password);

        return {"success": True}
