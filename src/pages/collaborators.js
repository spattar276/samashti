import React, {Component} from "react";
import work1 from '../images/work-1.jpg'
import "../styles/ourwork.scss"

export default class Collaborator extends Component {
  render() {
    return (
      <section className="image-banner">
        <img src={work1} alt="Heading" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <h2 >Under Construction</h2>
    </section>
    )
  }
};
