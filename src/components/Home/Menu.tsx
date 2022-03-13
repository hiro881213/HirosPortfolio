import type { VFC } from "react";
import { MenuItem } from './MenuItem';
import classes from './scss/Menu.module.scss';

import message from '../../assets/textLabels/textlabelMenu.json';

import scriptImageUrl from "../../assets/img/ScriptImage.jpg";
import graphicImageUrl from "../../assets/img/GraphicImage.jpg";
import programImageUrl from "../../assets/img/ProgramImage.jpg";

export const Menu: VFC = () => {

    const labelMessage = message;

    return(
        <>  
            <div className={classes.contents}>
                <MenuItem 
                    image = {scriptImageUrl}  
                    marginContents = "0px"  
                    mode = 'up' 
                    message = {labelMessage.ScriptMessage} 
                    read = {labelMessage.ScriptRead}>Script</MenuItem>

                <MenuItem 
                    image = {graphicImageUrl} 
                    marginContents = "60px" 
                    mode = 'down'
                    message = {labelMessage.GraphicMessage} 
                    read = {labelMessage.GraphicRead}>Graphic</MenuItem>

                <MenuItem 
                    image = {programImageUrl} 
                    marginContents = "60px" 
                    mode = 'up'
                    message = {labelMessage.programMessage} 
                    read = {labelMessage.programRead}>Programming</MenuItem>
            </div>
        </>
    )

}