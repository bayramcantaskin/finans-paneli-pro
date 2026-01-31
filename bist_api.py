from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

API_KEY = "SENIN_API_KEY"

@app.route("/bist")
def bist():
    url = "https://api.collectapi.com/economy/borsaIstanbul"
    headers = {"authorization": f"apikey {API_KEY}"}
    r = requests.get(url, headers=headers)
    return jsonify(r.json())

@app.before_request
def check_key():
    if request.headers.get("X-API-KEY") != "MY_SECRET_KEY":
        return {"error": "Unauthorized"}, 401

app.run(host="0.0.0.0", port=5000)
