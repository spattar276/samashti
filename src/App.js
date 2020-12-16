import React, { Component } from 'react';
// import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageContext} from '@ap.cx/react-fullpage';
import "./styles/index.scss";
// import {MENU, PAGES} from "./constants/constants";
// import mainLogo from './images/samastilogo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from './components/Menu';
import Home from './pages/home';
import OurWork from './pages/ourWork';
import AboutUs from './pages/aboutUs';
import Faq from './pages/faq';
import Collaborators from './pages/collaborators'
import ContactUs from './pages/contactUs'
export default function App() {
  return (
    <Router>
        <Menu />
        <Switch>
          <Route path="/ourwork" component={OurWork}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/faq" component={Faq}></Route>
          <Route path="/collaborators" component={Collaborators}></Route>
          <Route path="/contactus"component={ContactUs} ></Route>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
    </Router>
  );
}