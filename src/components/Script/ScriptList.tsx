import Slider from "react-slick";
import classes from "./scss/ScriptList.module.scss"

import IMG1 from '../../assets/img/GraphicImage.jpg';
import IMG2 from '../../assets/img/ProgramImage.jpg';

export const ScriptList = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        centerMode: false,
    };

    const images = [IMG1, IMG2, IMG2, IMG2, IMG2, IMG2, IMG2, IMG2, IMG2]

    return (
        <>
            <Slider {...settings}>
            <div><img src={IMG1} alt="pictuer" className={classes.imgSize} /></div>
            <div><img src={IMG1} alt="pictuer" className={classes.imgSize} /></div>
            <div><img src={IMG1} alt="pictuer" className={classes.imgSize} /></div>
            <div><img src={IMG1} alt="pictuer" className={classes.imgSize} /></div>
            
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