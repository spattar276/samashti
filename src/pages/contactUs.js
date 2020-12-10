import React from "react";

const ContactUs = (props) => {

  return (
    <div className="container contact-us">
      <h2 className="section-heading">Contact Us</h2>
      <div className="container-section">
        <div className="address">
          <h4>SAMASHTI FOUNDATION</h4>
          <p>Registered Office: 22, Embassy Tranqui, Alit#403, 8th Main 3rd Block, Koramangala, Bangalore</p>
          <p>Email: samashtifoundation@yahoo.com, Samashti.india@gmail.com</p>
          <p>Teliphone: 9663973295, 9663879295</p>
          <div>
            Follow us on <a target="_blank" href="https://www.facebook.com/samashtiindia">Facebook</a> <a target="_blank" href="https://www.instagram.com/samashtifoundation/">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
