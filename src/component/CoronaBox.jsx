import Layout from "./Layout/Layout";
import { Line, Bar } from "react-chartjs-2";
import CountUp from "react-countup";
import useFetchData from "./useFetchData";
import coronaImg from "./images/covid-19 (1).png";

const CoronaBox = () => {
    const { fetchData: coronaData, isLoading } = useFetchData(
        "https://api.covid19api.com/summary"
    );
    if (coronaData) {
        console.log(coronaData.data);
        console.log(coronaData.data.Countries[120]);
        var nepalData = coronaData.data.Countries[120];
    }

    const { fetchData: recordData, isLoading: isGraph } = useFetchData(
        "https://api.covid19api.com/total/dayone/country/nepal"
    );
    if (recordData) {
        console.log(recordData.data);
    }

    return (
        <Layout>
            <h5 className="text-center text-info">Corona Update</h5>
            <div className="row justify-content-around">
                <div className="worldwide col-sm-4">
                    <div className="h5 text-dark text-center">World Wide</div>
                    <h6 className="text-info text-center">
                        Total Death :
                        {isLoading && (
                            <span className="text-danger">Loading.... </span>
                        )}
                        {coronaData && (
                            <span className="text-danger">
                                <CountUp
                                    start={0}
                                    end={coronaData.data.Global.TotalDeaths}
                                    duration={2}
                                    separator=","
                                />
                            </span>
                        )}
                    </h6>
                    <h6 className="  text-info text-center">
                        Infected :
                        {isLoading && (
                            <span className="text-warning">Loading.... </span>
                        )}
                        {coronaData && (
                            <span className="text-warning">
                                <CountUp
                                    start={0}
                                    end={coronaData.data.Global.TotalConfirmed}
                                    duration={2}
                                    separator=","
                                />
                            </span>
                        )}
                    </h6>
                    <h6 className=" text-info text-center">
                        Recovered :{" "}
                        {isLoading && (
                            <span className="text-success">Loading.... </span>
                        )}
                        {coronaData && (
                            <span className="text-success">
                                {" "}
                                <CountUp
                                    start={0}
                                    end={coronaData.data.Global.TotalRecovered}
                                    duration={2}
                                    separator=","
                                />
                            </span>
                        )}
                    </h6>
                </div>

                <div className="coronaImgBox col-sm-2">
                    <img src={coronaImg} width="100px" alt="logoImage" />
                </div>

                <div className="country col-sm-4  ">
                    <div className="h5 text-dark text-center  ">Nepal</div>
                    <h6 className="text-info text-center">
                        Total Death :
                        {isLoading && (
                            <span className="text-danger">Loading.... </span>
                        )}
                        {coronaData && (
                            <span className="text-danger">
                                <CountUp
                                    start={0}
                                    end={nepalData.TotalDeaths}
                                    duration={2}
                                    separator=","
                                />
                            </span>
                        )}
                    </h6>
                    <h6 className="  text-info text-center">
                        Infected :
                        {isLoading && (
                            <span className="text-warning">Loading.... </span>
                        )}
                        {coronaData && (
                            <span className="text-warning">
                                <CountUp
                                    start={0}
                                    end={nepalData.TotalConfirmed}
                                    duration={2}
                                    separator=","
                                />
                            </span>
                        )}
                    </h6>
                    <h6 className=" text-info text-center">
                        Recovered :{" "}
                        {isLoading && (
                            <span className="text-success">Loading.... </span>
                        )}
                        {coronaData && (
                            <span className="text-success">
                                {" "}
                                <CountUp
                                    start={0}
                                    end={nepalData.TotalRecovered}
                                    duration={2}
                                    separator=","
                                />
                            </span>
                        )}
                    </h6>
                </div>
            </div>

            <div className="chart-container">
                {isGraph && <span className="text-danger">Loading.... </span>}
                {recordData && (
                    <Line
                        data={{
                            labels: recordData.data.map((eachdata) => {
                                var t = new Date(eachdata.Date);
                                var date = t.toDateString();
                                return date;
                            }),
                            datasets: [
                                {
                                    data: recordData.data.map(
                                        (eachdata) => eachdata.Confirmed
                                    ),
                                    label: "Confirmed",
                                    borderWidth: 1,
                                    borderColor: "#3333ff",
                                    fill: true,
                                },
                                {
                                    data: recordData.data.map(
                                        (eachdata) => eachdata.Recovered
                                    ),
                                    label: "Recovered",
                                    borderWidth: 1,
                                    borderColor: "#57C884",
                                    fill: true,
                                },
                                {
                                    data: recordData.data.map(
                                        (eachdata) => eachdata.Deaths
                                    ),
                                    label: "Deaths",
                                    borderWidth: 1,
                                    borderColor: "#F14520",
                                    fill: true,
                                },
                            ],
                        }}
                    />
                )}
            </div>
        </Layout>
    );
};

export default CoronaBox;
