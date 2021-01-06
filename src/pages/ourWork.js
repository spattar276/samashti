import React, {Component} from "react";
import HorizontalTimeline from 'react-horizontal-timeline';
import Video1 from '../images/video-1.mp4'
import flowchart from '../images/howwework.png'
//import 'react-vertical-timeline-component/style.min.css';
// "Raise funds through individuals, CSR, community collaboration, Bank tieups for loans, p2p platforms and other business collaborations",
const values = [
  "Adopting a village and their farmers",
  "Assessing the requirements",
  "Raise funds from various contributors",
  "Utilizing the funds at the village level over a period of time",
  "Simultaneously enable technology to improve ease of farming",
  "Implement various means to measure improvement and productivity of Organic Farming",
  "Creating sustainable model for the longer run",
  "Move out of the village to next village for the same transition",
]

export default class OurWork extends Component {
  
  render() {
    return (
      <div className="wrapper">
        <div className="container ">
          <section className="our-work">
            <h2>How we work</h2>
            <div style={{width: '65%', height: '450px'} }>
              <img style={{width: '100%', height: '100%', objectFit:"contain"} }src={flowchart} alt="how we work" />
            </div>
          </section>
        {/*   <div className="workflow-container ">  
            {
              values.map((item,index) => {
                return (
                  <div><p>{++index}</p>{item}</div>
                )
              })
            }
          </div> */}
          <section>
            <h2>Our Projects</h2>
            <div className="projects-container">
              <h3>Village : Nijjiyappanadoddi, Ramanagaram |  Grassroot Organization : BERU </h3>
              <div>
                <video width="320" height="240" controls>
                  <source src={Video1} type="video/mp4" />
                </video>
                <p>Sustainable Organic Farming Transition projects. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
          
            
            </div>
          </section>
        
        
      


        {/* <div className="container our-project">
          <h2 className="section-heading">Our Mission</h2>
          <div className="container-section">
            <p>What is the Mission of Samashti?</p>
            <p>To Facilitate funding for easy transition to Organic Farming</p>
            <ul>
              <li>	To facilitate fund raising required to make the village self-sufficient with all the infrastructure required to conduct organic farming.</li>
              <li>	We plan to enable an ecosystem of farm inputs for smooth transition of farmers through collaboration with various suppliers and service providers.</li>
              <li>	To raise funds for training the farmers for easy transition.</li>
              <li>	To make the farmers feel proud of their profession and enable them to become contributors for creating future organic farmers for our beautiful India.</li>
              <li>	To enable them to upgrade their earnings and livelihood to live comfortably and to create more employment opportunities for other residents of the village.</li>
              <li>	Empower women in the household to become entrepreneurs in rearing livestock and other allied agricultural activities to support their livelihood. Also train them to develop alternate skills to support their livelihood.</li>
              <li>	Create Farmprenuers who are passionate about creating an impact in this field.</li>
            </ul>
            <p>In a nutshell, the village and farmers will be adopted and will be assisted through funding for sustainable organic farming and to improve farmers livelihood.</p>
          </div>
        </div> */}
       </div> 
     </div>
    );
  }
}