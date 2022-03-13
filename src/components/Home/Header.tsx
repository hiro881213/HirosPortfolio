import type { VFC } from "react";
import classes from './scss/Header.module.scss';

export const HeaderArea: VFC = () => {

    return(
        <>  
            <a href = './'>
                <span className={classes.fontRound} >HIRO'S PORTFOLIO</span>
            </a>
        </>
    );

};