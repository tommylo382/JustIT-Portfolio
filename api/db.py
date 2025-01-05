from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
import json

app = Flask(__name__)

# database connection setup
db = SQLAlchemy()
db_cred = {
    "user": "root",
    "pass": "Pa$$w0rd",
    "host": "127.0.0.1",
    "name": "portfolio"
}

app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{db_cred["user"]}:{db_cred["pass"]}@{db_cred["host"]}/{db_cred["name"]}" 
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

@app.route("/api")
def api():
    response = ""
    func = request.args.get("function")

    # choose to call which function according to url parameters
    match func:
        case "show-skills":
            response = show_skills()
        case "show-project-weeks":
            response = show_project_weeks()
        case "show-projects":
            response = show_projects(request.args.get("week"))
        case "login":
            response = login(request.args.get("username"), request.args.get("password"))
        case "show-messages":
            response = show_messages()
        case "add-message":
            response = add_message(request.args.get("name"), request.args.get("email"), request.args.get("message"))
        case _:
            response = {"message": "Error: No parameters in url"}

    return response

# show skills function
def show_skills():
    # connect to database
    with db.engine.connect() as conn:
        rows = conn.execute(text("SELECT * FROM skills;"))
        results = rows.mappings().all()

        response = make_response(json.dumps(results, default=str))

        # set response headers to allow CORS
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "POST, PUT, PATCH, GET, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "*"
        response.content_type = "application/json"

        # close database connection
        conn.close()

    return response

# show project weeks function
def show_project_weeks():
    # connect to database
    with db.engine.connect() as conn:
        rows = conn.execute(text("SELECT * FROM project_weeks;"))
        results = rows.mappings().all()

        response = make_response(json.dumps(results, default=str))

        # set response headers to allow CORS
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "POST, PUT, PATCH, GET, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "*"
        response.content_type = "application/json"

        # close database connection
        conn.close()

    return response

# show projects function
def show_projects(week):
    # connect to database
    with db.engine.connect() as conn:
        rows = conn.execute(text(f"SELECT day FROM project_days WHERE week = '{week}';"))
        results = rows.mappings().all()

        response = make_response(json.dumps(results, default=str))

        # set response headers to allow CORS
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "POST, PUT, PATCH, GET, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "*"
        response.content_type = "application/json"

        # close database connection
        conn.close()

    return response

# login function
def login(user_name, password):
    # connect to database
    with db.engine.connect() as conn:
        rows = conn.execute(text(f"SELECT password FROM users WHERE user_name = '{user_name}';"))
        results = rows.mappings().all()

        if results == []:
            response = make_response({"message": "User not exist"})
        elif password == results[0]["password"]:
            response = make_response({"message": "correct"})
        else:
            response = make_response({"message": "Worng password"})

        # set response headers to allow CORS
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "POST, PUT, PATCH, GET, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "*"
        response.content_type = "application/json"
        
        # close database connection
        conn.close()

    return response

# show messages function
def show_messages():
    # connect to database
    with db.engine.connect() as conn:
        rows = conn.execute(text("SELECT * FROM messages ORDER BY send_time DESC;"))
        results = rows.mappings().all()

        response = make_response(json.dumps(results, default=str))

        # set response headers to allow CORS
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "POST, PUT, PATCH, GET, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "*"
        response.content_type = "application/json"

        # close database connection
        conn.close()

    return response

# add message function
def add_message(name, email, message):
    # connect to database
    with db.engine.connect() as conn:
        conn.execute(text(f"INSERT INTO messages(name, email, message) VALUES ('{name}', '{email}', '{message}');"))
        conn.commit()
        
        response = make_response({"message": "Message sent"})

        # set response headers to allow CORS
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "POST, PUT, PATCH, GET, DELETE, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "*"
        response.content_type = "application/json"

        # close database connection
        conn.close()

    return response