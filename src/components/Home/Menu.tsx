import type { VFC } from "react";
import { MenuItem } from './MenuItem';
import classes from './scss/Menu.module.scss';

export const Menu: VFC = () => {

    return(
        <>  
            <div className={classes.contents}>
                <MenuItem>Script</MenuItem>
                <MenuItem>Graphic</MenuItem>
                <MenuItem>Programming</MenuItem>
            </div>
        </>
    )

}