import React from 'react';
import heroVideo from "../assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={heroVideo} type="video/mp4" />
      </video>

    <div className="hero-content">
      <h1>NexusSoft IT Consultants</h1>
      <p>Your Trusted Partner in Digital Innovation</p>
      <a href="#services" className="btn btn-primary">Our Services</a>
    </div>
  </section>

  );
}

export default Hero;
