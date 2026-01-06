import React from 'react';
import AboutVideo from "../assets/dummy.mp4";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="row align-items-center">

        <div className="col-md-6">
          <h2>About Us</h2>

        <p>NexusSoft IT Consultants is a technology-driven company founded by computer science graduates with a strong interest in innovation and digital solutions. We specialize in providing reliable IT services, including software development, web application design, and system consultation, tailored to meet the needs of modern businesses.</p>

<p>Our mission is to empower organizations through efficient, scalable, and user-focused technology solutions. We aim to bridge the gap between business objectives and technological advancement by delivering high-quality services with professionalism and integrity.</p>

<p>Our vision is to become a trusted IT consulting partner recognized for innovation, teamwork, and excellence in service delivery. At NexusSoft, we believe in continuous learning, collaboration, and creating long-term value through technology.</p>

        </div>

        {/* Video container */}
        <div className="col-md-6">
          <video autoPlay muted loop playsInline controls width="100%">
            <source src={AboutVideo} type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
    
      
  );
}

export default About;
