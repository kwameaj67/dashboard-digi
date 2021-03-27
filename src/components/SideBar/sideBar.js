import React from 'react'
import { Link } from "react-router-dom";
import "./sideBar.css"
import routes from './sideBarData'
import {RiLogoutCircleRFill} from 'react-icons/ri'



const SideBar = () => {
    return (
        <div className="sideBarArea">
                    <div className="greetings">
                        <h1>Digipocket</h1>
                        <p>Welcome,{""} <span> Paul</span> </p>
                    </div>
                    <ul className="sideBarList">
                        {
                            routes.map((value, key) => {
                                return (
                                    <div className="row" key={key} >
                                        <Link to={value.path}>
                                            <div key={key} className="item" id={value.path === value.title ? "active" : ""}>
                                                <div className="icon">{value.icon}</div>
                                                {/* <p>{value.title}</p> */}
                                                <div><p>{value.title}</p></div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    <div className="logout">
                        <RiLogoutCircleRFill className="logout-icon" size={24}/>
                        <div><p>Logout</p></div>
                    </div>
                    </ul>
        </div>
    )
}

export default SideBar