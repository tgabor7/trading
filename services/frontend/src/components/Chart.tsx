
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTimeseries } from '../api/TimeSeries';
import { Time, TimeSeriesData } from '../data/types';
import { ActionCreators } from '../store';
import { State } from '../store/reducers';
import { parseTimeseries } from '../utils/data';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { convertToSecs } from '../utils/time';

const options: ApexOptions = {
    chart: {
        type: 'candlestick',
        height: 350
    },
    title: {
        text: 'CandleStick Chart',
        align: 'left'
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
}
interface ChartProps {
    data: any;
    labels: any;
}

const Chart = ({ data, labels }: ChartProps): JSX.Element => {

    const dispatch = useDispatch();

    const { setTimeseries } = bindActionCreators(ActionCreators, dispatch);
    const time_series = useSelector((state: State) => state.timeSeries);
    const symbol = useSelector((state: State) => state.symbol);
    const time_function = useSelector((state: State)=>state.timeFunction);

    useEffect(() => {
        getTimeseries({ currency: "usd", symbol, time: time_function as Time }).then(res => {
            const parsed = res ? parseTimeseries(res) : undefined;

            parsed && setTimeseries(parsed);
        })
    }, [symbol, time_function]);

    const series = [{
        data: time_series.data.map((e:TimeSeriesData)=>{
            console.log(convertToSecs(e.date));
            return {
                x: new Date(convertToSecs(e.date)),
                y: [e.open, e.high, e.low, e.close]
            }
        })
    }]

    return (<>
        
        <ReactApexChart options={options} series={series} type="candlestick" height={350} />
    </>)
}

export default Chart;