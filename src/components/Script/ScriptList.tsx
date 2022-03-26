import Slider from "react-slick";
import { Link } from 'react-router-dom';

import classes from "./scss/ScriptList.module.scss"

import story1 from '../../assets/scenario/scenario1/page1.jpg';
import story2 from '../../assets/scenario/scenario2/page1.jpg';

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
                        <img src={story1} alt = {"scenario1"} className={classes.scriptImg} />
                    </Link>
                </div>
                
                <div>
                    <Link to = {`${baseURL}detailScenario?story=2`}>
                        <img src={story2} alt = {"scenario2"} className={classes.scriptImg} />
                    </Link>
                </div>
            </Slider>
        </>
    );


};