import React, { useEffect, useState } from 'react';
import "./App.css"
import useAPI from './hooks/useAPI';
import { API_ENDPOINT } from './config/config';
import { getDates, getOpen, parseTimeseries } from './utils/data';
import Chart from './components/Chart';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  const [api_data, loading] = useAPI(`${API_ENDPOINT}/?function=DIGITAL_CURRENCY_DAILY&symbol=btc&interval=5min`)
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    if (loading || !api_data) return
    const time_series = parseTimeseries(api_data);
    setLabels(getDates(time_series, 123))
    setData(getOpen(time_series));
  }, [api_data, loading])

  return (
    <Provider store={store}>
      <div className="App">
        <div className="chart-container">
          <Chart data={data} labels={labels}></Chart>
        </div>
      </div>
    </Provider>

  );
}

export default App;
