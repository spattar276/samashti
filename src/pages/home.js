import React, {Component} from "react";
import  OF from '../images/icons/crops.svg';
import  FI from '../images/icons/farming.svg';
import  TI from '../images/icons/drone-farming.svg';
import  GI from '../images/icons/green-innovation.svg';
import  IIF from '../images/icons/farmer.svg';
import home1 from '../images/home-13.jpeg';
import home2 from '../images/home-12.jpeg';
import flat from '../images/icons/apartments1.svg';
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
              <p> <img src={GI} alt="saveTree"></img> <h4>Encourage Innovation </h4></p>
              <p> <img src={IIF} alt="saveTree"></img> <h4>Incubate Farmpreneurs</h4></p>
            </div>
          </div>  
        </section>
        <section className="container-12">
         {/*  <h3>We received 1.5 tons of compost from Sobha Carnation Belandur</h3> */}
        </section>
        <section className="container-8 container-13">
          <div className="c-13-c1">
            {/* <h2>SAMASHTI FOUNDATION</h2> */}
            <p><strong>Samashti Foundation </strong>is a not-for profit organization started to address the issues that are stoping the farmers from transitioning to organic farming.</p>
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
                <p>
                  <div className="icon-flat-container"><img src={flat} alt='apt1' /></div>
                  <div className="icon-flat-title"><p>BERU</p></div>
                </p>
              </div>
              <div>
                <h3>Learning Partner</h3>
                <p>
                  <div className="icon-flat-container"><img src={flat} alt='apt2' /></div>
                  <div className="icon-flat-title"><p>Dayananda Sagar College of Engineering</p></div>
                </p>
              </div> 
            </div>
           <div >
              <h3>Urban Compost Connects</h3>
              <div className="flex-3">
                <p>
                  <div className="icon-flat-container"><img src={flat} alt='apt3' /></div>
                  <div className="icon-flat-title"><p>KVLF Apartment,</p><p>Yelchenahalli</p></div>
                </p>
                <p>
                  <div className="icon-flat-container"><img src={flat} alt='apt4' /></div>
                  <div className="icon-flat-title"><p>Innovative Flora,</p><p>Coxtown</p></div>
                </p>
                <p>
                  <div className="icon-flat-container"><img src={flat} alt='apt5' /></div>
                  <div className="icon-flat-title"><p>Sobha Tulip,</p><p>JP Nagar</p> </div>
                </p>
              </div>
            </div>
            
          </div>
        </section>
      </div>
    )
  }
}
