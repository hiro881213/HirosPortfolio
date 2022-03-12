import React from 'react';
import Particles from "react-tsparticles";
import ParticlesParams from './assets/particles-default.json';
import logo from './logo.svg';
import './App.scss';
import classes from "./Particle.module.scss";

function App() {

  const params = ParticlesParams as typeof ParticlesParams;

  return (
    <div className="App">
      <Particles
        className={classes.Particle}
        options = {params}
        // options={params as any} 
      />
    </div>
  );
}

export default App;
