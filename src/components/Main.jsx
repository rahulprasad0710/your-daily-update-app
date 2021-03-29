// import logo from "../imgg/raul.jpg";
import CoronaBox from "../component/CoronaBox";
import Introbox from "../component/Introbox";
import Sidebar from "../component/Sidebar/Sidebar";
import Todo from "../component/ToDoAll/Todo";
import Weatherbox2 from "../component/Weatherbox2";

const Main2 = () => {
    return (
        <div className="container main-container">
            <section className="glass">
                <Sidebar />
            </section>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
        </div>
    );
};

export default Main2;

/* <div className="row justify-content-between mb-3 ">
                    <Introbox />
                    <CoronaBox />
                    <Weatherbox2 />
                </div>
                <div className="row justify-content-between">
                    <Todo />
                    <div className="newsbox col-md-5 box">news box</div>
                </div> */
