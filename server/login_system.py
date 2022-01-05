from helper.sql_helper import SqlHelper
from queries.login_system_queries import LoginSystemQueries
import bcrypt

# from flask_jwt_extended import create_access_token
# from flask_jwt_extended import get_jwt_identity
# from flask_jwt_extended import jwt_required

class LoginSystem:
    def __init__(self, db: SqlHelper):
        self.db = db
        self.login_system_queries = LoginSystemQueries(self.db)

    def register(self, request):
        data = request.get_json()
        username = data["username"]
        password = data["password"].encode('utf-8')

        userExists = self.login_system_queries.check_user_exists(username)

        if userExists:
            return {"success": False}

        hashed_password = bcrypt.hashpw(password, bcrypt.gensalt()).decode('utf-8')

        self.login_system_queries.add_user(username, hashed_password);

        return {"success": True}

    def login(self, request):
        data = request.get_json()
        username = data["username"]
        password = data["password"].encode('utf-8')

        users = self.login_system_queries.get_user_info(username)

        if len(users) == 0:
            return {"success": False}

        user = users[0]

        user_id = user[0]
        hashed_password = user[2].encode('utf-8')

        correct_password = bcrypt.checkpw(password, hashed_password)

        return {"success": correct_password}
