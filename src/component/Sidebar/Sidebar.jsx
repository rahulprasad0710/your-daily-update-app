import React from "react";
import { Link } from "react-router-dom";

import avatar from "../images/ava2.png";
import { ReactComponent as Corona } from "../images/bacteria.svg";
import { ReactComponent as Weather } from "../images/cloudy.svg";
import { ReactComponent as ToDoLogo } from "../images/scrapbook.svg";
import { ReactComponent as NewsLogo } from "../images/read.svg";

const Sidebar = () => {
    return (
        <div className="col-md-3 sidebar ">
            <Link to="/" className="sidebar_profile">
                <img src={avatar} alt="profile avatar" />
                <h5 className="text-center text-info">
                    <span className="d-none  ">Rahul</span>
                </h5>
            </Link>
            <div className="sidebar_menu-box">
                <ul className="sidebar_menu">
                    <li className="sidebar_menu-item">
                        <Link to="/weather" className="sidebar_menu-item-link">
                            <Weather width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block">
                                Weather
                            </span>
                        </Link>
                    </li>
                    <li className="sidebar_menu-item">
                        <Link to="/news" className="sidebar_menu-item-link">
                            <NewsLogo width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block ">
                                News
                            </span>
                        </Link>
                    </li>
                    <li className="sidebar_menu-item">
                        <Link to="/corona" className="sidebar_menu-item-link">
                            <Corona width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block">
                                Corona
                            </span>
                        </Link>
                    </li>
                    <li className="sidebar_menu-item">
                        <Link to="/todo" className="sidebar_menu-item-link">
                            <ToDoLogo width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block">
                                ToDos
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="version">
                <h6 className="text-center text-info"> &#169; Rahul </h6>
                <h6 className="text-center text-info">V: 1.2.0 </h6>
            </div>
        </div>
    );
};

export default Sidebar;

<h5 className="brandName text-center text-info ">Daily Updates</h5>;
