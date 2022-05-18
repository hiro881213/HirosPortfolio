import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

import classes from "./scss/ScriptList.module.scss"

import story1 from '../../assets/scenario/scenario1/page1.jpg';
import story2 from '../../assets/scenario/scenario2/page1.jpg';
import story3 from '../../assets/scenario/scenario3/page1.jpg';

export const ScriptList = () => {

    const baseURL = "../"

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <>
            <Carousel responsive={responsive}>
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
                <div>
                    <Link to = {`${baseURL}detailScenario?story=3`}>
                        <img src={story3} alt = {"scenario3"} className={classes.scriptImg} />
                    </Link>
                </div>

            </Carousel>
        </>
    );


};