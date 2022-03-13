import type { VFC } from "react";
import { MenuItem } from './MenuItem';
import classes from './scss/Menu.module.scss';

import scriptImageUrl from "../../assets/img/ScriptImage.jpg";
import graphicImageUrl from "../../assets/img/GraphicImage.jpg";
import programImageUrl from "../../assets/img/ProgramImage.jpg";

export const Menu: VFC = () => {

    return(
        <>  
            <div className={classes.contents}>
                <MenuItem image = {scriptImageUrl}  marginContents = "0px"  mode = 'up'>Script</MenuItem>
                <MenuItem image = {graphicImageUrl} marginContents = "60px" mode = 'down'>Graphic</MenuItem>
                <MenuItem image = {programImageUrl} marginContents = "60px" mode = 'up'>Programming</MenuItem>
            </div>
        </>
    )

}