import { Dashboard,Investments,Analytics,Settings,Wallet,WatchLists } from '../../pages/index'
import {MdDashboard} from 'react-icons/md'
import {RiMoneyCnyCircleLine} from 'react-icons/ri'
import {BiWallet} from 'react-icons/bi'
import {VscListSelection} from 'react-icons/vsc'
import {SiGoogleanalytics} from 'react-icons/si'
import {FiSettings} from 'react-icons/fi'

const routes = [
    {
      path: "/dashboard",
      exact: true,
      title:"Dashboard",
      icon:<MdDashboard/>,
      main: () => <Dashboard/>
    },
    {
      path: "/investments",
      exact: true,
      title:"Investments",
      icon:<RiMoneyCnyCircleLine/>,
      main: () => <Investments/>
    },
    {
      path: "/wallet",
      exact: true,
      title:"Wallet",
      icon:<BiWallet/>,
      main: () => <Wallet/>
    },
    {
      path: "/watchlists",
      exact: true,
      title:"WatchLists",
      icon:<VscListSelection/>,
      main: () => <WatchLists/>
    },
    {
      path: "/analytics",
      exact: true,
      title:"Analytics",
      icon:<SiGoogleanalytics/>,
      main: () => <Analytics/>
    },
    {
      path: "/settings",
      exact: true,
      title:"Settings",
      icon:<FiSettings/>,
      main: () => <Settings/>
    },
    
  ];
  

  export default routes