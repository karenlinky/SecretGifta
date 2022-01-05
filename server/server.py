from flask import Flask, request
from helper.sql_helper import SqlHelper
from login_system import LoginSystem

app = Flask(__name__)
db = SqlHelper()
login_system = LoginSystem(db)

@app.route("/register", methods=['POST'])
def register():
    return login_system.register(request)

if __name__ == "__main__":
    app.run(debug=True)