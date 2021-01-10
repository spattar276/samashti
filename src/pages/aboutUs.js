import React, {Component} from "react";
export default class AboutUs extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container about-us">
        <section className="our-work">  
          <div className="title-container"><h2>About us</h2> </div> 
            <div className="flex-container row">     
              <div className="projects-container"> 
                <p> We are passionate young at heart entrepreneurs, Engineers, Farmers and Volunteers from various backgrounds who have taken up this cause after seeing the struggle of farmers, and want to make a difference in their lives. We seek to sustain farmers, resources and communities by promoting farming practices and methods that are profitable, environmentally sound and good for communities.</p>
                <p>The extensive use of pesticides and fertilizers made us think about slowly transitioning farmers to sustainable growing methods.</p>  
                <p>The lack of Organic Farming knowledge, and assistance are all missing for many farmers and we at Samashti wants to address this problem and would want to collectively work with several players in the market to facilitate bringing the required help for easy transition to sustainable organic farming methods.</p>
                <p>We want to be change makers and our vision is to transform as many villages as we can into a self-sustainable one in the near future.</p> 

               {/*  <p>We are a not-for-profit social cause organization started to enable farmers transition to Sustainable Organic Farming.</p> 
                <p> We aim to achieve this goal by raising funds on a village to village basis to create village level and farmer level infrastructure required for Organic Farming, in collaboration with grassroot level organizations that are working directly with farmers.</p>
                <p> we plan to enable an ecosystem of farm inputs, implement technology, support innovation and incubate farmpreneurs on sustainable organic farming practices.</p> */}
              </div> 
          </div>   
        </section>
        <section className="our-work">  
          <div className="title-container"><h2>Our Mission</h2> </div> 
            <div className="flex-container row">     
              <div className="projects-container"> 
              <p>Our mission is to raise funds to help farmers transition easily to sustainable organic farming. Funds would support</p>
              <ul>
                <li>
                  Creating self-sufficient villages with all the infrastructure required to conduct sustainable organic farming.
                </li>
                <li>
                  Enabling an ecosystem of farm inputs for smooth transition through collaboration with various suppliers and service providers.
                </li>
                <li>
                  Innovations and inventions in farming.
                </li>
                <li>
                  Encouraging farmpreneurs (Farmer-Entrepreneurs) to create startups and generate employment opportunities in the field of sustainable organic farming.
                </li>

              </ul>
            </div> 
          </div>   
        </section>
        <section className="our-work">  
          <div className="title-container"><h2>Our Team</h2> </div> 
            <div className="flex-container row">     
              <div className="projects-container" style={{ height: '352px'} }> 
                
              </div> 
          </div>   
        </section>
        
          
  
      </div>
      </div>          
    );
  }
}