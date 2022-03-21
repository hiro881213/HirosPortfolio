import Slider from "react-slick";
import classes from "./scss/ScriptList.module.scss"

import story1 from '../../assets/scenario/story1/page1.jpg';

export const ScriptList = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        centerMode: false,
    };

    return (
        <>
            <Slider {...settings}>
            <div><img src={story1} alt="pictuer" className={classes.scriptImg} /></div>
            {/* <div><img src={IMG1} alt="pictuer" className={classes.scriptImg} /></div>
            <div><img src={IMG1} alt="pictuer" className={classes.scriptImg} /></div>
            <div><img src={IMG1} alt="pictuer" className={classes.scriptImg} /></div> */}
            
            {/*
                images.map((image) => {
                    <div key = {image}>
                        <img src={image} alt="pictuer" />
                    </div>
                })
            } */}
            </Slider>
        </>
    );


};