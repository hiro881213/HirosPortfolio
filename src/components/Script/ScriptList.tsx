import Slider from "react-slick";
import { Link } from 'react-router-dom';

import classes from "./scss/ScriptList.module.scss"

import story1 from '../../assets/scenario/story1/page1.jpg';
import story2 from '../../assets/scenario/story2/page1.jpg';

export const ScriptList = () => {

    const baseURL = "../"

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
                <div>
                    <Link to = {`${baseURL}detailScenario?story=1`}>
                        <img src={story1} alt="picture" className={classes.scriptImg} />
                    </Link>
                </div>
                
                <div><img src={story2} alt="picture" className={classes.scriptImg} /></div>
            </Slider>
        </>
    );


};