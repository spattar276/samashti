import React, {Component} from "react";
import Home1 from '../images/home-1.jpeg';

export default class Home extends Component{
  render() {
    return(
      <div className="home">
       <section className="container-11"> 
        <div>
          <img src={Home1} alt="carosuel-1" />
        </div>
       </section>
       <section className="container-12"> 
        <h2>We work for Farmers </h2>
          <div className="flex-container">
            <p>Transition to Sustainable Organic Farming</p>
            <p>Provide farmer level infrastructure </p>
            <p>Enable ecosystem of Farming through technology, innovation and creating farmpreneurs</p>
          </div>

       {/*  <div>
          We are a not-for-profit social cause organization started to enable farmers transition to Sustainable Organic Farming. 
          We aim to achieve this goal by raising funds on a village to village basis to create village level and farmer level infrastructure required for Organic Farming, in collaboration with grassroot level organizations that are working directly with farmers.
          Furthermore, we plan to enable an ecosystem of farm inputs, implement technology, support innovation and incubate farmpreneurs on sustainable organic farming practices. 
        </div> */}
       </section>
      </div>
    )
  }
}
