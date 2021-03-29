import React from "react";
import avatar from "../images/ava2.png";
import { ReactComponent as Corona } from "../images/bacteria.svg";
import { ReactComponent as Weather } from "../images/cloudy.svg";
import { ReactComponent as ToDoLogo } from "../images/scrapbook.svg";
import { ReactComponent as NewsLogo } from "../images/read.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_profile">
                <img src={avatar} alt="profile avatar" />
                <h5 className="text-center text-info">
                    <span className="d-none  ">Rahul</span>
                </h5>
            </div>
            <div className="sidebar_menu-box">
                <ul className="sidebar_menu">
                    <li className="sidebar_menu-item">
                        <a href="/" className="sidebar_menu-item-link">
                            <Weather width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block">
                                Weather
                            </span>
                        </a>
                    </li>
                    <li className="sidebar_menu-item">
                        <a href="/" className="sidebar_menu-item-link">
                            <NewsLogo width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block ">
                                News
                            </span>
                        </a>
                    </li>
                    <li className="sidebar_menu-item">
                        <a href="/" className="sidebar_menu-item-link">
                            <Corona width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block">
                                Corona
                            </span>
                        </a>
                    </li>
                    <li className="sidebar_menu-item">
                        <a href="/" className="sidebar_menu-item-link">
                            <ToDoLogo width="40px" height="40px" />{" "}
                            <span className="text-info d-none d-md-block">
                                ToDos
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="version">
                <h6 className="text-center text-info"> Copyright &#169; </h6>
                <h6 className="text-center text-info">V :1.2.0 </h6>
            </div>
        </div>
    );
};

export default Sidebar;

<h5 className="brandName text-center text-info ">Daily Updates</h5>;
