import type { VFC } from "react";
import Particles from "react-tsparticles";
import classes from "./scss/Particle.module.scss";
import ParticlesParams from '../../assets/particles-default.json';
import ParticlesParams2 from '../../assets/particles-default2.json';
import ParticlesParams3 from '../../assets/particles-default3.json';


export const HomeParticles: VFC = () => {

    // 乱数を生成する
    const min = 1 ;
    const max = 10 ;

    const randomVal = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    let targetJSON;

    if (randomVal <= 3) {

        targetJSON = ParticlesParams;

    } else if  (randomVal <= 6 && randomVal > 3) {

        targetJSON = ParticlesParams2;

    } else {

        targetJSON = ParticlesParams3;

    }

    // 背景色を設定する
    const params = targetJSON;

    return (
        <>
            <Particles
                className={classes.Particle}
                options = {params}/>
        </>
    );

};
