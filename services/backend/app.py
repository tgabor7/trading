from alpha_vantage.timeseries import TimeSeries
import requests
import pandas as pd
from dotenv import load_dotenv
import os
from flask import Flask
from flask import request

load_dotenv()

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get(symbol=""):
    API_KEY = os.getenv('API_KEY')
    symbol = request.args.get('symbol')
    interval = request.args.get('interval')
    function = request.args.get('function')
    if symbol == "":
        return {"status": 200, "response": "Not found"}
    url = f'https://www.alphavantage.co/query?function={function}&symbol={symbol}&market=USD&interval={interval}&apikey={API_KEY}'
    r = requests.get(url)
    data = r.json()

    return {"status": 200, "response": data}

@app.route('/')
def index():
    return {"status": 200, "response": "ok"}

app.run(debug=True, host='0.0.0.0', port=3000)
