// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Team from './components/Team';
import './App.css';

function App() {
  return (
    <div>
      <Navbar /> {/* Only rendering Navbar for testing */}
      <Hero />
      <About />
      <Services />
      <Team/>
      <Footer />
    </div>
  );
}

export default App;
