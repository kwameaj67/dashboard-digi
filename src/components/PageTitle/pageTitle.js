import React from 'react'
import './pageTitle.css'
import {Switch,Route} from 'react-router-dom'
import routes from '../SideBar/sideBarData'


const PageTitle = () => {
    return(
          <div className="pageTitle">
                    {
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={  <p>{route.title}</p>}
                            />
                        ))}
                    </Switch>
                    }
                </div> 
    )
} 

export default PageTitle