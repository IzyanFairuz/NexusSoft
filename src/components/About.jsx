import React from 'react';
import AboutVideo from "../assets/dummy.mp4";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="row align-items-center">

        <div className="col-md-6">
          <h2>About Us</h2>

        <p>
          <strong>Mission:</strong> To empower businesses through scalable
          software solutions and innovative digital transformation.
        </p>

        <p>
          <strong>Vision:</strong> To be a global leader in accessible,
          cutting-edge technology.
        </p>

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
