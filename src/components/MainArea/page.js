import React from 'react'
import {
    Switch,
    Route,
    useLocation
  } from "react-router-dom";
import routes from '../SideBar/sideBarData'
import "./page.css"
// import { Dashboard,Investments,Analytics,Settings,Wallet,WatchLists } from '../../pages/index'
import {
    CSSTransition
  } from "react-transition-group";

const Page = () => {
    const location = useLocation()
    return (
        <div className="pageArea">
                <div className="pageContent">
                    <CSSTransition
                        key={location.key}
                        classNames="fade"
                        timeout={300}
                        >
                        <Switch location={location}>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                        </CSSTransition>
                </div>
        </div>
    )
}

export default Page