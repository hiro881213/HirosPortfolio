import type { VFC } from "react";
import classes from './scss/Menu.module.scss';

export const Menu: VFC = () => {

    return(
        <>  
            <div className={classes.contents}>
                <div className={classes.item}>
                    <span>Script</span>
                </div>

                <div className={classes.item}>
                    <span>Graphic</span>
                </div>

                <div className={classes.item}>
                    <span>Programming</span>
                </div>

            </div>
        </>
    )

}