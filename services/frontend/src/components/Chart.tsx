
import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTimeseries } from '../api/TimeSeries';
import { Time, TimeSeriesData } from '../data/types';
import { ActionCreators } from '../store';
import { State } from '../store/reducers';
import { parseTimeseries } from '../utils/data';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import ErrorContext from '../error';
import { ErrorSeverity } from '../error/types';
import { TOO_MANY_API_CALLS } from '../utils/consts';
import { BarData, createChart, ISeriesApi, UTCTimestamp } from 'lightweight-charts';

const options: ApexOptions = {
    chart: {
        type: 'candlestick',
        height: 350
    },
    title: {
        text: '',
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
    data: TimeSeriesData[];
    labels: string[];
}

const Chart = ({ data, labels }: ChartProps): JSX.Element => {

    const dispatch = useDispatch();

    const container = useRef<HTMLDivElement>(null);
    const time_series = useSelector((state: State) => state.timeSeries);
    const { setTimeseries } = bindActionCreators(ActionCreators, dispatch);
    const { setErrorMessage } = useContext(ErrorContext);
    const symbol = useSelector((state: State) => state.symbol);
    const time_function = useSelector((state: State) => state.timeFunction);

    const [lineSeries, setLineSeries] = useState<ISeriesApi<"Candlestick">>();

    useEffect(() => {
        getTimeseries({ currency: "usd", symbol, time: time_function as Time }).then(res => {
            const parsed = res ? parseTimeseries(res, time_function as Time) : undefined;

            if (parsed) {
                setTimeseries(parsed);
            } else {
                setErrorMessage({ severity: ErrorSeverity.ERROR, message: TOO_MANY_API_CALLS });
            }
        })
    }, [symbol, time_function]);

    useEffect(() => {
        if (container.current) {
            const chart = createChart(container.current, {
                width: 600, height: 450, timeScale: {
                    rightOffset: 12,
                    barSpacing: 3,
                    fixLeftEdge: true,
                    lockVisibleTimeRangeOnResize: false,
                    rightBarStaysOnScroll: true,
                    borderVisible: false,
                    borderColor: '#fff000',
                    visible: true,
                    timeVisible: true,
                    secondsVisible: false,
                }
            });
            setLineSeries(chart.addCandlestickSeries());
        }


    }, [container]);

    useEffect(() => {
        if (!lineSeries) return;
        lineSeries.setData(time_series.data.map(e => {
            return {
                time: (new Date(e.date).getTime() / 1000) as UTCTimestamp,
                open: e.open,
                close: e.close,
                low: e.low,
                high: e.high,
            };
        }));
        console.log(time_series);

    }, [container, data, labels, lineSeries, time_series]);

    return (<>
        <div ref={container}>

        </div>
    </>)
}

export default Chart;