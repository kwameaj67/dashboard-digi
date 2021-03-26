import { Dashboard,Investments,Analytics,Settings,Wallet,WatchLists } from '../../pages/index'
import {MdDashboard} from 'react-icons/md'
import {RiMoneyCnyCircleLine} from 'react-icons/ri'
import {SiCashapp} from 'react-icons/si'
import {VscListSelection} from 'react-icons/vsc'
import {SiGoogleanalytics} from 'react-icons/si'
import {FiSettings} from 'react-icons/fi'

const routes = [
    {
      path: "/dashboard",
      exact: true,
      title:"Dashboard",
      icon:<MdDashboard size={24}/>,
      main: () => <Dashboard/>
    },
    {
      path: "/investments",
      exact: true,
      title:"Investments",
      icon:<RiMoneyCnyCircleLine size={24}/>,
      main: () => <Investments/>
    },
    {
      path: "/wallet",
      exact: true,
      title:"Wallet",
      icon:<SiCashapp  size={24}/>,
      main: () => <Wallet/>
    },
    {
      path: "/watchlists",
      exact: true,
      title:"WatchLists",
      icon:<VscListSelection size={24}/>,
      main: () => <WatchLists/>
    },
    {
      path: "/analytics",
      exact: true,
      title:"Analytics",
      icon:<SiGoogleanalytics size={24}/>,
      main: () => <Analytics/>
    },
    {
      path: "/settings",
    //   exact: true,
      title:"Settings",
      icon:<FiSettings size={24}/>,
      main: () => <Settings/>
    },
    
  ];
  

  export default routes