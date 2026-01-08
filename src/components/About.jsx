import React from 'react';
import AboutVideo from "../assets/AboutVideo.mp4";

const About = () => {
  return (
    <section id="about" className="about-section">
  <div className="container">

    {/* Centered Video */}
    <div className="about-video-wrapper">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="about-video"
      >
        <source src={AboutVideo} type="video/mp4" />
      </video>
    </div>

    {/* About Text */}
    <div className="about-text">
      <h2>About Us</h2>

      <p>
        NexusSoft IT Consultants is a technology-driven company founded by
        computer science graduates with a strong interest in innovation and
        digital solutions. We specialize in providing reliable IT services,
        including software development, web application design, and system
        consultation, tailored to meet the needs of modern businesses.
      </p>

      <p>
        Our journey started with a simple assignment: to build a better to-do list. The result was so impactful that our Dean pushed us onto the global stage at the International IT Design Competition. After taking home first prize, we realized we were more than just classmates, we were a team with a shared vision.
      </p>

      <p>
        We decided to turn that academic success into a professional reality. Therefore, today, we leverage our professional expertise to serve the community through our premier software and website creations. We are committed to delivering excellence, ensuring that our best innovations help solve real-world problems for our clients.
      </p>

      <p>
        <strong>MISSION:</strong>
        Empowering organizations through efficient, scalable,
        and user-focused technology solutions. We aim to bridge the gap between
        business objectives and technological advancement by delivering
        high-quality services with professionalism and integrity.
      </p>

      <p>
        <strong>VISION:</strong> 
        To be a global leader in providing accessible, cutting-edge technology for the next generation of digital users.
      </p>
    </div>

  </div>
</section>

    
      
  );
}

export default About;
