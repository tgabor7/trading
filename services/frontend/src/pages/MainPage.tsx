import "bulma/css/bulma.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Chart from "../components/Chart";
import ChartHeader from "../components/ChartHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideMenu from "../components/SideMenu";
import { State } from "../store/reducers";
import { getDates, getValues } from "../utils/data";
import "./styles.css"

const MainPage = (): JSX.Element => {

    const timeSeries = useSelector((state: State) => state.timeSeries);

    return (<>
        <Navbar />

        <div>

        </div>

        <div className="App">
            <div className="flex">
                <SideMenu />
                <div className="chart-container">
                    <ChartHeader />
                    <Chart data={getValues(timeSeries)} labels={getDates(timeSeries, 10)}></Chart>
                </div>
            </div>
        </div>

        <Footer />
    </>)
}

export default MainPage;