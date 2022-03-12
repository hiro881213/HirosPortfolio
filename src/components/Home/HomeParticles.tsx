import type { VFC } from "react"
import Particles from "react-tsparticles";
import classes from "./scss/Particle.module.scss";
import ParticlesParams from '../../assets/particles-default.json';

export const HomeParticles: VFC = () => {

    const params = ParticlesParams as typeof ParticlesParams;

    return (      
        <>
            <Particles
                className={classes.Particle}
                options = {params}/>
        </>
    );

};
