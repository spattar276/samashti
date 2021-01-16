import React, {Component} from "react";

import Video1 from '../images/video-1.mp4'
import flowchart from '../images/howwework-v1.png'
import work1 from '../images/work-1.jpg'

export default class OurWork extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <div className="our-work">
          <section className="image-banner">
            <img src={work1} alt="Heading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h2 >Our work</h2>
          </section>
          <section className=" wrk-1">
            <div className="title"><h2>How we work</h2> </div>
            <div className="wrk-11">
              <img src={flowchart} alt="how we work" />
            </div>
          </section>
          <section className="wrk-2">
            <div className="container">  
              <div className="title"><h2>Our Projects</h2> </div> 
              <div className="tile-col-2">     
                <div className="tile-item-45">  
                  <video width="100%" height="100%" controls>
                    <source src={Video1} type="video/mp4" />
                  </video>                
                </div>
                <div className="tile-item-55 projects-container"> 
                  <h3>At Nijjiyappanadoddi, Ramanagaram </h3>
                  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div> 
            </div>   
            </div>
          </section>
        
        
      


      
       </div> 
     </div>
    );
  }
}