import type { VFC } from "react";
import { Link } from 'react-router-dom';

import classes from './scss/Header.module.scss';

export const HeaderArea: VFC = () => {

    const baseURL = "./"

    return(
        <>
            <Link to = {baseURL}>
                <span className={classes.fontRound} >HIRO'S PORTFOLIO</span>
            </Link>
        </>
    );

};