import React, { Component } from "react";
import aboutus1 from '../images/aboutus-2.jpeg'
import aboutus2 from '../images/aboutus.jpeg'
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
                <p>The lack of Organic Farming knowledge, and assistance are all missing for many farmers and we at Samashti wants to address this problem and would want to collectively work with several players in the market to facilitate bringing the required help for easy transition to sustainable organic farming practises.</p>
                <p>We want to be the change makers and our vision is to transform as many farmers as we can into a sustainable organic farmers in the near future.</p>
              </div>
              <div style={{ width: '45%', padding: '10px 0px' }}>
                <img src={aboutus2} alt="samashti-aboutus" />
              </div>
            </div>
          </section>
          <section className="abt-2">
            <div className="title-container">
              <h2>Our Mission</h2>
              <h3>Our mission is to help farmers transition easily for which the funds will be raised and will be utilised for below activites</h3>
            </div>
            <ul className="flex-container row ">
              <li>
                <p> <img src={OF} alt="saveTree"></img> <h4>Enable Sustainable Organic Farming </h4>  </p>
                  <p >Creating self-sufficient villages with the required infrastructure to conduct sustainable organic farming.</p>
                </li>
              <li>
                <p> <img src={FI} alt="saveTree"></img> <h4>Connecting Farm Inputs </h4> </p> 
                <p>Urban compost to Rural </p>
                <p>Seed Producers</p>
                <p>Equipment Rentals and Manufacturers</p>
                <p>Agri Input Companies</p>
                <p>Government Subsidies</p>
                <p>Financial Lending Institutions</p>
                <p>Crop Insurance</p>
                <p>Training</p>
              </li>
              <li>
                <p> <img src={TI} alt="saveTree"></img> <h4>Technological Intervention</h4></p>
                <p>Automation </p>
                <p>Farm Management </p>
                <p>Weather and Crop Management </p>
              </li>
              <li>
                <p> <img src={IIF} alt="saveTree"></img> <h4>Encourage Innovation</h4></p>
                <p>Support and Encourage Farmers with their inventions in farming </p>
                <p>Helping them to take their ideas from ideation to implementation</p>
              </li>
              <li>
                <p> <img src={IIF} alt="saveTree"></img> <h4>Incubate Farmpreneurs</h4></p>
                <p >Encouraging farmpreneurs (Farmer-Entrepreneurs) to create startups and generate employment opportunities in the field of farming.</p>
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