import CountUp from "react-countup";
import useFetchData from "./useFetchData";

const CoronaBox = () => {
    const { fetchData: coronaData, isLoading } = useFetchData(
        "https://api.covid19api.com/summary"
    );
    if (coronaData) {
        console.log(coronaData.data.Countries[120]);
        var nepalData = coronaData.data.Countries[120];
    }

    return (
        <div className="coronabox col-md-7 box ">
            <h5 className="text-center text-info">Corona Update</h5>
            <div className="row">
                <div className="worldwide col-sm-6">
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
                <div className="country col-sm-6  ">
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
        </div>
    );
};

export default CoronaBox;
