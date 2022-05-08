import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MakeAppointment from "./components/MakeAppointment"
import {BrowserRouter as Router,Route} from "react-router-dom"
import DisplayAppointmentFee from "./components/DisplayAppointmentCus"
import updateAppintment from "./components/updateAppintment"
import loginA from "./components/LoginA";

import HeaderComp from './components/HeaderComponent copy';
import FooterComp from "./components/FooterComponent copy";
import AdminSideA from "./components/AdminSideA";
import DisplayAppointment from "./components/DisplayAppointmentAdmin"


function App() {
  return (
    <Router>
      <div>
        <HeaderComp/>
        <Header/>
        <Route path="/addTAppDetails" exact component={MakeAppointment}/>
        <Route path="/listTAppDetails" exact component={DisplayAppointmentFee}/>
        <Route path="/updateAppintment/:id" exact component={updateAppintment}/>
        
        <Route path="/AdminSideA" exact component={AdminSideA}/>
        <Route path="/DisplayAppointment" exact component={DisplayAppointment}/>
        <Route path="/loginA" exact component={loginA}/>
        <FooterComp/>


        
      </div>
    </Router>
    
  );
}

export default App;
