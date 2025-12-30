import React from 'react';
import softwareIcon from "../assets/software.png";
import designIcon from "../assets/design.png";
import consultIcon from "../assets/consulting.png";


const services = [
  { title: "Custom Software Development", description: "Tailor-made applications built with Node.js and React." , image: softwareIcon},
  { title: "UI/UX Design", description: "User-centric design focusing on responsiveness and modern aesthetics.", image: designIcon },
  { title: "IT Consultation", description: "Expert guidance for graduates and startups entering the digital market.", image: consultIcon },
];

const Services = () => {
  return (
    <section id="services" className="container my-5">
      <h2>Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="card h-100 text-center p-3">
              <img
                src={service.image}
                alt={service.title}
                className="service-icon"
              />
              <h5>{service.title}</h5>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
