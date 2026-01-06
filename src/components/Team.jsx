import React from 'react';
import './Team.css';
import IzyanImg from "../assets/Izyan.jpg";
import FidaImg from "../assets/faridah.jpg";
import SabImg from "../assets/sabrina.jpg";

const Team = () => {
  return (
    <section id="team" className="container">
        <h2>Meet the Team</h2>
      <div className="team-container">
        {/* Team Member 1 */}
        <div className="team-card">
          <img src={IzyanImg} alt="Izyan" className="team-photo"/>
          <h3>NUR IZYAN FAIRUZ BINTI ABDUL MALEK</h3>
          <p className="position">Front-end Developer</p>
          <p className="description">
            Responsible for UI design, React components, and responsive layout.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="team-card">
          <img src={FidaImg} alt="Fida" className="team-photo"/>
          <h3>NUR FARIDAH BT SHAHARUDIN</h3>
          <p className="position">UI/UX Designer</p>
          <p className="description">
            Short description about roles and responsibilities.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="team-card">
          <img src={SabImg} alt="Sab" className="team-photo"/>
          <h3>NUR SABRINA BINTI SABRI</h3>
          <p className="position">Professional Consultant</p>
          <p className="description">
            Short description about roles and responsibilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;