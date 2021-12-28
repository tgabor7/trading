from alpha_vantage.timeseries import TimeSeries
import requests
import pandas as pd
from dotenv import load_dotenv
import os
from flask import Flask
from flask import request
import logging
from logging.handlers import TimedRotatingFileHandler
from flask import jsonify, make_response

load_dotenv()

app = Flask(__name__)
root_logger = logging.getLogger()
root_logger.setLevel(logging.DEBUG)
handler = TimedRotatingFileHandler('logs/logs.log')
handler.setFormatter(logging.Formatter('%(name)s %(message)s'))
root_logger.addHandler(handler)


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


@app.route('/currencyList', methods=['GET'])
def getCurrencyList():
    url = 'https://www.alphavantage.co/digital_currency_list/'
    r = requests.get(url)

    parsed = r.content.decode('utf-8')
  
    return {"status": 200, "response": parsed}


@app.route('/exchange_rate/', methods=['GET'])
def get_exchange_rate():
    API_KEY = os.getenv('API_KEY')
    symbol = request.args.get('symbol')
    url = f'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency={symbol}&to_currency=USD&apikey={API_KEY}'
    r = requests.get(url)
    data = r.json()
    return {"status": 200, "response": data}


@app.route('/')
def index():
    return {"status": 200, "response": "ok"}


app.run(debug=True, host='0.0.0.0', port=3001)
