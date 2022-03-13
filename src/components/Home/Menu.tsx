import type { VFC } from "react";
import { MenuItem } from './MenuItem';
import classes from './scss/Menu.module.scss';
import scriptImageUrl from "../../assets/img/ScriptImage.jpg";


export const Menu: VFC = () => {

    return(
        <>  
            <div className={classes.contents}>
                <MenuItem image = {scriptImageUrl}>Script</MenuItem>
                {/* <MenuItem>Graphic</MenuItem>
                <MenuItem>Programming</MenuItem> */}
            </div>
        </>
    )

}