import React from 'react'
import './pageTitle.css'
import {Switch,Route} from 'react-router-dom'
import routes from '../SideBar/sideBarData'
import {FaUserAlt} from 'react-icons/fa'
import {CgMenuLeft} from 'react-icons/cg'


// const  openNav = () => {
//     // document.getElementById("sideBarArea").style.width = "280px";
//     let sidebar = document.querySelector('.sideBarArea')
//     sidebar.classList.toggle('active')
//   }
  
  
const PageTitle = () => {
    return(
          <div className="pageTitle">
                <div className="menu"  >
                    <CgMenuLeft size={30}/>
                </div>
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
                    <div className="profile">
                            <FaUserAlt className="profile-icon" size={15} color="#f4f7fa"/>
                    </div>
                </div> 
    )
} 

export default PageTitle