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
        </Router>
    </div>
  );
}

export default App;
