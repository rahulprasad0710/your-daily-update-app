import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Main2 from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Main2 />
            </BrowserRouter>
        </div>
    );
}

export default App;
