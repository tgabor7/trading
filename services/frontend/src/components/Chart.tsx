
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../store';
import { State } from '../store/reducers';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


export const options = {
    responsive: true,
    bezierCurve: true,
    tension: 1,
    elements: {
        point: {
            radius: 0
        }
    },
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

interface ChartProps {
    data: any;
    labels: any;
}

const Chart = ({ data, labels }: ChartProps): JSX.Element => {

    const dispatch = useDispatch();

    const { setTimeseries } = bindActionCreators(ActionCreators, dispatch);
    const state = useSelector((state : State)=>state.timeSeries);

    console.log(state);
    

    return (<>
    <button onClick={()=>{
        setTimeseries([{date: "awd", data: {
            open: 10,
            close: 1
        }}])
    }}>

    </button>
        <Line options={options} data={{
            labels,
            datasets: [
                {
                    label: 'Open',
                    data,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ],
        }} />
    </>)
}

export default Chart;