import React from 'react'
import { Switch } from "react-router-dom";
import "./sideBar.css"
import routes from './sideBarData'



const SideBar = () => {
    return (
        <div class="sideBarArea">
                <h1>Logo</h1>
                <Switch>
                    <ul className="sideBarList">
                        {
                            routes.map((value, key) => {
                                return (
                                    <li>
                                        <div className="row">
                                            {/* <Link to={value.path}> */}
                                                <div>{value.icon}</div>
                                                <div><p>{value.title}</p></div>
                                            {/* </Link> */}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Switch>
        </div>
    )
}

export default SideBar