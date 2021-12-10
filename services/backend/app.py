from alpha_vantage.timeseries import TimeSeries
import requests
import pandas as pd
from dotenv import load_dotenv
import os
from flask import Flask

load_dotenv()

app = Flask(__name__)

@app.route('/api/<symbol>', methods=['GET'])
def index(symbol=""):
    API_KEY = os.getenv('API_KEY')
    if symbol == "":
        return {"status": 200, "response": "Not found"}
    url = f'https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol={symbol}&market=USD&interval=5min&apikey={API_KEY}'

    r = requests.get(url)
    data = r.json()

    return {"status": 200, "response": data}

app.run(debug=True, host='0.0.0.0')
