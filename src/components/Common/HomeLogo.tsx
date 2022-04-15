import { Link } from 'react-router-dom';

import classes from './scss/HomeLogo.module.scss';

// Homeロゴコンポーネント
export const HomeLogo = () => {

    const baseURL = "/"

    return (
        <>
            <Link to = {baseURL}>
                <span className={classes.fontRound} >HIRO'S</span>
                <br />
                <span className={classes.fontRound} >PORTFOLIO</span>
            </Link>
        </>
    );

};