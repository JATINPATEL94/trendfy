import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faEnvelope,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact">
      <div className="normalHero contactHero">
        <h2>#let's talk</h2>
        <p>More Than Clothing Redefining Fashion, Defining You.</p>
      </div>
      <div className="contactDetails">
        <div className="details">
          <span>GET IN TUCH</span>
          <h2>Visit One Of Our Agency Locations Or Contact Us Today</h2>
          <h3>Head Office</h3>
          <div>
            <li>
              <FontAwesomeIcon icon={faMap} />
              <p>562 Narol-Naroda Road, Ahmedabad- Gujarat, India</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>jatin.patel1355@gmail.com</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <p>+91 9316 **** 50</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <p>Monday To Saturday: 09.00am To 16.00pm</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2596.3061079795234!2d72.6355435168254!3d23.0336357120468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e867f7a85d219%3A0x9b51c2443512b6c3!2sNarol%20-%20Naroda%20Rd%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1703408719735!5m2!1sen!2sin"
            width={"100%"}
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
