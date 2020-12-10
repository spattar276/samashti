import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const content = [
  "Adopting a village and their farmers",
  "Assessing the requirements",
  "Raising fund through individual contributions, CSR funding, community collaboration, Bank tieups for loans, fund raising through p2p platforms and other business collaborations",
  "Utilizing the funds at the village level over a period of time",
  "Simultaneously enable technology to improve ease of farming",
  "Implement various means to measure improvement and productivity of Organic Farming",
  "Creating sustainable model for the longer run",
  "Move out of the village to next village for the same transition",
]
const HowItWorks = (props) => {
  
  return (
    <div className="container how-it-work">
      <h2 className="section-heading">How it Works</h2>
      <div className="container-section ">
        {/* <ol> */}
          {
            content.map(item=>{
              return(
              <p>{item}</p>
              )
            })
          }
        {/* </ol> */}
      </div>
    </div>
  );
};

export default HowItWorks;
