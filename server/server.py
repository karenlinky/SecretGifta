from dotenv import load_dotenv
load_dotenv()
import os

from flask import Flask, request
from helper.sql_helper import SqlHelper
from login_system import LoginSystem
from user import User

from flask_jwt_extended import JWTManager
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY")
jwt = JWTManager(app)

db = SqlHelper()
login_system = LoginSystem(db)
user = User(db)

@app.route("/register", methods=['POST'])
def register():
    return login_system.register(request)

@app.route("/login", methods=['POST'])
def login():
    return login_system.login(request)

@app.route("/search_user", methods=['GET'])
@jwt_required()
def search_user():
    requester_id = get_jwt_identity();
    return user.search_by_user_name(request, requester_id)

if __name__ == "__main__":
    app.run(debug=True)