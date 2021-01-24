import React from 'react';
import "./styles/index.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/menu';
import Home from './pages/home';
import OurWork from './pages/ourWork';
import AboutUs from './pages/aboutUs';
import Faq from './pages/faq';
import Collaborators from './pages/collaborators'
import ContactUs from './pages/contactUs'
export default function App() {
  return (
    <main>
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
    </main>  
  );
}