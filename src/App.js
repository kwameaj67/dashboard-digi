import './App.css';
import SideBar from './components/SideBar/sideBar'
import Page from './components/MainArea/page'
import { BrowserRouter as Router, } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <SideBar/>
          <Page/>
       {/* <div className="sidebar">
       </div> */}
       {/* <div className="area"> 
       </div> */}
        </Router>
    </div>
  );
}

export default App;
