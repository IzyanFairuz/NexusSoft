import React from 'react';
import './Team.css';
import IzyanImg from "../assets/Izyan.jpg";

const Team = () => {
  return (
    <section id="team" className="container">
        <h2>Our Team:</h2>
      <div className="team-container">
        {/* Team Member 1 */}
        <div className="team-card">
          <img src={IzyanImg} alt="Izyan" className="team-photo"/>
          <h3>NUR IZYAN FAIRUZ BINTI ABDUL MALEK</h3>
          <p className="position">Project Leader, Project Developer</p>
          <p className="description">
            Responsible for UI design, React components, and responsive layout.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="team-card">
          <img src="./gambar passport.jpg" alt="Fida" className="team-photo"/>
          <h3>Full Name</h3>
          <p className="position">Position</p>
          <p className="description">
            Short description about roles and responsibilities.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="team-card">
          <img src="./gambar passport.jpg" alt="Sab" className="team-photo"/>
          <h3>Full Name</h3>
          <p className="position">Position</p>
          <p className="description">
            Short description about roles and responsibilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;