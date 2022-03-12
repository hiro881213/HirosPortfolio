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
        options = {options}
        // options={params as any} 
      />
    </div>
  );
}

export const options = {
  fpsLimit: 40,
  particles: {
      number: {
          value: 80,
          density: {
              enable: true,
              area: 800,
          },
      },
      color: {
          value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"],
      },
      opacity: {
          value: 0.5,
          random: true,
      },
      size: {
          value: 5,
          random: true,
      },
      move: {
          enable: true,
          speed: 6,
          random: false,
      },
  },
  interactivity: {
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          resize: true,
      },
  },
  background: {
      image: "radial-gradient(#222, #000)",
  },
};


export default App;
