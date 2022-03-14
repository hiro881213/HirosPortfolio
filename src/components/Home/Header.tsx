import type { VFC } from "react";
import classes from './scss/Header.module.scss';

export const HeaderArea: VFC = () => {

    const baseURL = "/portfolio"

    return(
        <>  
            <a href = {baseURL}>
                <span className={classes.fontRound} >HIRO'S PORTFOLIO</span>
            </a>
        </>
    );

};