import React from 'react';
import {
  FiMail,
  FiPhone,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
  <div className="container text-center">

    <h5 className="mb-3">Contact Us</h5>

    <div className="d-flex justify-content-center gap-4 footer-icons">

      <a href="mailto:info@nexussoft.com">
        <FiMail size={24} />
      </a>

      <a href="tel:+60123456789">
        <FiPhone size={24} />
      </a>

      <a href="https://wa.me/60123456789">
        <FaWhatsapp size={26} />
      </a>

      <a href=" https://instagram.com/nexussoft">
        <FaInstagram size={26} />
      </a>

      <a href="https://facebook.com/nexussoft">
        <FaFacebook size={26} />
      </a>

      <a href="https://linkedin.com/company/nexussoft">
        <FaLinkedin size={26} />
      </a>

    </div>

    <p className="mt-3 small">
      © 2026 NexusSoft IT Consultants. All rights reserved.
    </p>

  </div>
</footer>


  );
}

export default Footer;
