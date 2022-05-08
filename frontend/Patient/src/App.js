import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PaymentDetails from "./components/PaymentDetails"
import {BrowserRouter as Router,Route} from "react-router-dom"
import DisplayPayFee from "./components/DisplayPayFee"
import updatePaymentFee from "./components/updatePaymentFee"

import HeaderComp from './components/HeaderComponent copy';
import FooterComp from "./components/FooterComponent copy";


function App() {
  return (
    <Router>
      <div>
        <HeaderComp/>
        <Header/>
        <Route path="/addTFeeDetails" exact component={PaymentDetails}/>
        <Route path="/listTFeeDetails" exact component={DisplayPayFee}/>
        <Route path="/updatePaymentFee/:id" exact component={updatePaymentFee}/>
        
        <FooterComp/>


        
      </div>
    </Router>
    
  );
}

export default App;
