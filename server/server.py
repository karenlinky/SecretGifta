from dotenv import load_dotenv
load_dotenv()
import os

from flask import Flask, request
from helper.sql_helper import SqlHelper
from login_system import LoginSystem

from flask_jwt_extended import JWTManager

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY")
jwt = JWTManager(app)

db = SqlHelper()
login_system = LoginSystem(db)

@app.route("/register", methods=['POST'])
def register():
    return login_system.register(request)

@app.route("/login", methods=['POST'])
def login():
    return login_system.login(request)

if __name__ == "__main__":
    app.run(debug=True)