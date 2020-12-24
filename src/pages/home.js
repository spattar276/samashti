import React, {Component} from "react";
import  OF from '../images/icons/crops.svg';
import  FI from '../images/icons/farming.svg';
import  TI from '../images/icons/drone-farming.svg';
import  IIF from '../images/icons/farmer.svg';

export default class Home extends Component{
  render() {
    return(
      <div className="home">
        <section className="container-11"> 
          <div className="right-section">
            <h3>We work for farmers to </h3>
              <div className="flex-container">
                <p> <img src={OF} alt="saveTree"></img> <h4>Enable sustainable organic farming </h4>  </p>
                <p> <img src={FI} alt="saveTree"></img> <h4>Provide farm inputs </h4> </p>
                <p> <img src={TI} alt="saveTree"></img> <h4>Technology intervention</h4></p>
                <p> <img src={IIF} alt="saveTree"></img> <h4>Innovations and  incubating farmpreneurs</h4></p>
              </div>
          </div>  
        </section>
        <section className="container-12">
          <p> Compost providers </p>
          <p> Innovative Flora </p>
          <p> Shoba Tulip </p>
          <p> KV Lake Front </p>
       </section>
      </div>
    )
  }
}
