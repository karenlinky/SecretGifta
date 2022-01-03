from flask import Flask

app = Flask(__name__)

@app.route("/register")
def register():
    return {"result": "success"}

if __name__ == "__main__":
    app.run(debug=True)