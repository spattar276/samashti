import React, { Component } from "react";
import OF from '../images/icons/crops.svg';
import FI from '../images/icons/farming.svg';
import TI from '../images/icons/drone-farming.svg';
import GI from '../images/icons/green-innovation.svg';
import IIF from '../images/icons/farmer.svg';
import home1 from '../images/home-13.jpeg';
import home2 from '../images/home-12.jpeg';
import flat from '../images/icons/apartments1.svg';
import USG from '../images/swachagraha.png';
import "../styles/home.scss";
export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <section className="hc-1">
          <div className="carosuel"><img src={home1} alt="home1" /></div>
          <div className="moving-text"><h1>WE WORK FOR FARMERS </h1> </div>
          <div className="right-section">
            <ul>
              <li>
                <a href="/"><img src={OF} alt="saveTree"></img><span>Enable Sustainable Organic Farming</span></a>
              </li>
              <li>
                <a href="/"> <img src={FI} alt="saveTree"></img><span>Connect Farm Inputs</span></a>
              </li>
              <li>
                <a href="/"> <img src={TI} alt="saveTree"></img><span>Technological Intervention</span></a>
              </li>
              <li>
                <a href="/"><img src={GI} alt="saveTree"></img><span>Encourage Innovation</span></a>
              </li>
              <li>
                <a href="/"> <img src={IIF} alt="saveTree"></img><span>Incubate Farmpreneurs</span></a>
              </li>
            </ul>
          </div>
        </section>
        <section className="hc-2">
          {/* <h4>We received 1.5 tons of compost from Sobha Carnation Belandur</h4>  */}
        </section>
        <section className="hc-3 row">
          <div className="hc-3__item hc-3__item__content">
              <p><strong>Samashti Foundation </strong>is a not-for-profit organization started to address the issues that are preventing farmers from transitioning to Sustainable Organic Farming.</p>
              <p> We seek to sustain farmers, resources and communities by promoting farming practices and methods that are profitable, environmentally sound and good for communities. </p>
              <a href="/aboutus" className="a-button a-button__green">KNOW MORE</a>
            </div>  
          <div className="hc-3__item hc-3__item__figure">
             <img src={home2} alt="aboutus" />
            </div>
        </section>
        <section className="hc-4">
          <h2>Our Collaborators</h2>
          <div className="hc-4__container">
            <div className="row">
              <div className="hc-4__tile2">
                <h3>Grassroots Level Partner</h3>
                <p className="flaticon bl" >
                  <img src={flat} alt='apt1' className="flaticon__container"/>
                  <span className="flaticon__title">BERU</span>
                </p>
              </div>
             {/*  <div className="hc-4__tile2">
                <h3>Learning Partner</h3>
                <p className="flaticon">
                  <img src={flat} alt='apt2'  />
                  <span >Dayananda Sagar College of Engineering</span>
                </p>
              </div> */}
              <div className="hc-4__tile2">
                <h3>Urban Compost Connects</h3>
                <p className="flaticon">
                  <img src={USG} alt='apt1' />
                  <span>SwachaGraha <br/> Bengaluru</span>
                  <span className="verticalline"></span>
                </p>
              </div>
            </div>
            <div className="row">
              <h3>Urban Compost Contributors</h3>
              <div className="uc row">  
                <p className="flaticon">
                  <img src={flat} alt='apt4' />
                  <span>Innovative Flora,<br/>Coxtown</span>
                </p>
                <p className="flaticon">
                  <img src={flat} alt='apt5' />
                  <span>Sobha Tulip, <br/>JP Nagar</span>
                </p>
                <p className="flaticon">
                  <img src={flat} alt='apt3' />
                  <span>KVLF Apartment,<br/>Yelchenahalli</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
