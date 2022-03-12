import type { VFC } from "react";
import classes from './scss/Header.module.scss';

export const HeaderArea: VFC = () => {

    return(
        <>
            <span className={classes.fontRound} >HIRO'S PORTFOLIO</span>
        </>
    );

};