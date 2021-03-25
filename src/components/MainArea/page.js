import React from 'react'
import {
    Switch,
    Route,
  } from "react-router-dom";
import routes from '../SideBar/sideBarData'
import "./page.css"
// import { Dashboard,Investments,Analytics,Settings,Wallet,WatchLists } from '../../pages/index'

const Page = () => {
    return (
        <div class="pageArea">
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                ))}
            </Switch>
        </div>
    )
}

export default Page