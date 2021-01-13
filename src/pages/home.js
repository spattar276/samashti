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
          <h3>WE WORK FOR FARMERS </h3>
          <div className="right-section">
           
            <div className="flex-container column">
              <p> <img src={OF} alt="saveTree"></img> <h4>Enable Sustainable Organic Farming </h4>  </p>
              <p> <img src={FI} alt="saveTree"></img> <h4>Connecting Farm Inputs </h4> </p>
              <p> <img src={TI} alt="saveTree"></img> <h4>Technological Intervention</h4></p>
              <p> <img src={IIF} alt="saveTree"></img> <h4>Encourage Innovation </h4></p>
              <p> <img src={IIF} alt="saveTree"></img> <h4>Incubate Farmpreneurs</h4></p>
            </div>
          </div>  
        </section>
        <section className="container-12">
          <h3>We received 1.5 tons of compost from Sobha Carnation Belandur</h3>
        </section>
        <section className="container-8 container-13">
          <div className="c-13-c1">
            {/* <h2>SAMASHTI FOUNDATION</h2> */}
            <p>Samashti Foundation is a not-for profit organization started to address the issues that are stoping the farmers from transitioning to organic farming.</p>
             <p> We seek to sustain farmers, resources and communities by promoting farming practices and methods that are profitable, environmentally sound and good for communities. </p>
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
                <h3>Grassroot Level Partner</h3>
                <p><img src={flat} alt='apt1' /><span>BERU</span></p>
              </div>
              <div>
                <h3>Learning Partner</h3>
                <p><img src={flat} alt='apt1' /><span>Dayananda Sagar College of Engineering</span></p>
              </div> 
            </div>
           <div >
              <h3>Urban Compost Connects</h3>
              <div className="flex-3">
                <p><img src={flat} alt='apt1' /><span>KVLF Apartment, Yelchenahalli</span></p>
                <p><img src={flat} alt='apt1' /><span>Innovative Flora, Coxtown</span></p>
                <p><img src={flat} alt='apt1' /><span>Sobha Tulip, JP Nagar </span></p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    )
  }
}
