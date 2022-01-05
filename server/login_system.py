from helper.sql_helper import SqlHelper
from queries.login_system_queries import LoginSystemQueries
import bcrypt

class LoginSystem:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.login_system_queries = LoginSystemQueries(self.db)

    def register(self, request):
        data = request.get_json()
        username = data["username"]
        password = bytes(data["password"], 'utf-8')

        userExists = self.login_system_queries.check_user_exists(username)

        if userExists:
            return {"success": False}

        hashed_password = bcrypt.hashpw(password, bcrypt.gensalt())

        self.login_system_queries.add_user(username, hashed_password);

        return {"success": True}
