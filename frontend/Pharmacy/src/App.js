import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MedDetials from "./components/MedicineDetails"
import {BrowserRouter as Router,Route} from "react-router-dom"
import DisplayMed from "./components/DisplayMedicine"
import updateMed from "./components/updateMedicine"
import addOrder from './components/addOrder';
import DisplayOrder from './components/DisplayOrder';

import HeaderComp from './components/HeaderComponent copy';
import FooterComp from "./components/FooterComponent copy";
import Cusview from "./components/CusView";


function App() {
  return (
    <Router>
      <div>
        <HeaderComp/>
        <Header/>
        <Route path="/addMedDetails" exact component={MedDetials}/>
        <Route path="/listMedDetails" exact component={DisplayMed}/>
        <Route path="/updateMed/:id" exact component={updateMed}/>
        <Route path="/OrderMedd" exact component={addOrder}/>
        <Route path="/ViewOrder" exact component={DisplayOrder}/>
        
        
        
        <Route path="/CusView" exact component={Cusview}/>
       
        <FooterComp/>


        
      </div>
    </Router>
    
  );
}

export default App;
