import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PaymentDetails from "./components/PaymentDetails"
import {BrowserRouter as Router,Route} from "react-router-dom"
import DisplayPayment from "./components/DisplayPayment"
import UpdatePayment from "./components/UpdatePayment"
import HeaderComp from './components/HeaderComponent copy';
import FooterComp from "./components/FooterComponent copy";


function App() {
  return (
    <Router>
      <div>
        <HeaderComp/>
        <Header/>
        <Route path="/addPaymentDetails" exact component={PaymentDetails}/>
        <Route path="/listTPaymentDetails" exact component={DisplayPayment}/>
        <Route path="/updateTuitionFee/:id" exact component={UpdatePayment}/>
      
        <FooterComp/>


        
      </div>
    </Router>
    
  );
}

export default App;
