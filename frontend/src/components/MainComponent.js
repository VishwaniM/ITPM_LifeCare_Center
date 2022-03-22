import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DocterCom from "./DocterCom";
import PharmacyComponent from "./Pharmacy/PharmacyComponent";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";



class Main extends Component {

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/" exact component={() => <Redirect to="/home" />} />

          <Route path="/home" component={HomePage} /> 

          <Route path="/doctors" exact component={() => <Redirect to="/doctors"/>}><DocterCom /></Route>
          <Route path="/pharmacy" exact component={() => <Redirect to="/pharmacy"/>}><PharmacyComponent /></Route>  
          
          <Redirect to="/home" />
        </Switch>
        <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
