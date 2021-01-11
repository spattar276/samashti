import React, {Component} from "react";
import  OF from '../images/icons/crops.svg';
import  FI from '../images/icons/farming.svg';
import  TI from '../images/icons/drone-farming.svg';
import  IIF from '../images/icons/farmer.svg';
import home1 from '../images/home-13.jpeg';
import home2 from '../images/home-2.jpg';
import flat from '../images/flat.png';
export default class Home extends Component{
  render() {
    return(
      <div className="home">
        <section className="container-11"> 
          <div><img src={home1} alt="home1" /></div>
          <div className="right-section">
            <h3>We work for farmers to </h3>
            <div className="flex-container column">
              <p> <img src={OF} alt="saveTree"></img> <h4>Enable sustainable organic farming </h4>  </p>
              <p> <img src={FI} alt="saveTree"></img> <h4>Provide farm inputs </h4> </p>
              <p> <img src={TI} alt="saveTree"></img> <h4>Technology intervention</h4></p>
              <p> <img src={IIF} alt="saveTree"></img> <h4>Innovations and  incubating farmpreneurs</h4></p>
            </div>
          </div>  
        </section>
        <section className="container-12">
          <h3>We received 1.5 tons of compost from Sobha Carnation Belandur</h3>
        </section>
        <section className="container-8 container-13">
          <div className="c-13-c1">
            <h2>SAMASHTI FOUNDATION</h2>
            <p>We are not-for profit social cause organization working towards enabling farmers transition to sustainable organic farming </p>
            <a href="/aboutus" className="a-button">KNOW MORE</a>
          </div>
          <div className="c-13-c2">
            <img src={home2} alt="aboutus" />
          </div>
        </section>
        <section className=" container-14">
          <h2>Our Collaborators</h2>
          <div className="container-8">
            <div className="flex-2">
              <div>
                <h3>Grassroot level</h3>
                <p><img src={flat} alt='apt1' /><span>BERU</span></p>
              </div>
              <div>
                <h3>Learning Partners</h3>
                <p><img src={flat} alt='apt1' /><span>DSCE</span></p>
              </div>
            </div>
            <div >
            <h3>Urban Connectors</h3>
            <div className="flex-3">
              <p><img src={flat} alt='apt1' /><span>KVLF Apartment</span></p>
              <p><img src={flat} alt='apt1' /><span>Shobha Carnations</span></p>
              <p><img src={flat} alt='apt1' /><span>Shobha Carnations</span></p>
              <p><img src={flat} alt='apt1' /><span>Shobha Carnations</span></p>
            </div>
          </div>
          </div>
        </section>
      </div>
    )
  }
}
