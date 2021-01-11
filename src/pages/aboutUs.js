import React, { Component } from "react";
import aboutus1 from '../images/aboutus-2.jpeg'
import aboutus2 from '../images/aboutus-3.jpeg'
import OF from '../images/icons/crops.svg';
import FI from '../images/icons/farming.svg';
import TI from '../images/icons/drone-farming.svg';
import IIF from '../images/icons/farmer.svg';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="about-us">
          <section className="image-banner">
            <img src={aboutus1} alt="Heading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h2 >About us</h2>
          </section>
          <section className="container abt-1">
            <div className="flex-container row">
              <div style={{ width: '55%', padding: '0px 20px', lineHeight: '22px', color: '#555555' }}>
                <h3>Who are we</h3>
                <p> We are passionate young at heart entrepreneurs, Engineers, Farmers and Volunteers from various backgrounds who have taken up this cause after seeing the struggle of farmers, and want to make a difference in their lives. We seek to sustain farmers, resources and communities by promoting farming practices and methods that are profitable, environmentally sound and good for communities.</p>
                <p>The extensive use of pesticides and fertilizers made us think about slowly transitioning farmers to sustainable growing methods.</p>
                <p>The lack of Organic Farming knowledge, and assistance are all missing for many farmers and we at Samashti wants to address this problem and would want to collectively work with several players in the market to facilitate bringing the required help for easy transition to sustainable organic farming methods.</p>
                <p>We want to be change makers and our vision is to transform as many villages as we can into a self-sustainable one in the near future.</p>

                {/*  <p>We are a not-for-profit social cause organization started to enable farmers transition to Sustainable Organic Farming.</p> 
                <p> We aim to achieve this goal by raising funds on a village to village basis to create village level and farmer level infrastructure required for Organic Farming, in collaboration with grassroot level organizations that are working directly with farmers.</p>
                <p> we plan to enable an ecosystem of farm inputs, implement technology, support innovation and incubate farmpreneurs on sustainable organic farming practices.</p> */}
              </div>
              <div style={{ width: '45%', padding: '10px 0px' }}>
                <img src={aboutus2} alt="samashti-aboutus" />
              </div>
            </div>
          </section>
          <section className="abt-2">
            <div className="title-container">
              <h2>Our Mission</h2>
              <h3>Our mission is to help farmers transition easily to sustainable organic farming.</h3>
            </div>
            <ul className="flex-container row ">
              <li>
                <p> <img src={OF} alt="saveTree"></img> <h4>Enable sustainable organic farming </h4>  </p>
                  <p >Creating self-sufficient villages with all the infrastructure required to conduct sustainable organic farming.</p>
                </li>
              <li>
                <p> <img src={FI} alt="saveTree"></img> <h4>Provide farm inputs </h4> </p>
                  <p>Enabling an ecosystem of farm inputs for smooth transition through collaboration with various suppliers and service providers.</p>
                </li>
              <li>
                <p> <img src={TI} alt="saveTree"></img> <h4>Technology intervention</h4></p>
                 <p > Innovations and inventions in farming.</p>
                </li>
              <li>
                <p> <img src={IIF} alt="saveTree"></img> <h4>Innovations and  incubating farmpreneurs</h4></p>
                  <p >Encouraging farmpreneurs (Farmer-Entrepreneurs) to create startups and generate employment opportunities in the field of sustainable organic farming.</p>
                </li>

            </ul>

          </section>
          <section className="our-work">
            <div className="title-container"><h2>Our Team</h2> </div>
            <div className="flex-container row">
              <div className="projects-container" style={{ height: '352px' }}>

              </div>
            </div>
          </section>



        </div>
      </div>
    );
  }
}