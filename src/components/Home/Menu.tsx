import type { VFC } from "react";
import { MenuItem } from './MenuItem';
import classes from './scss/Menu.module.scss';

import message from '../../assets/textLabels/textlabelMenu.json';

import scriptImageUrl from "../../assets/img/ScriptImage.jpg";
import graphicImageUrl from "../../assets/img/GraphicImage.jpg";
import programImageUrl from "../../assets/img/ProgramImage.jpg";

export const Menu: VFC = () => {

    const labelMessage = message;
    const baseURL = "./portfolio"


    return(
        <>  
            <div className={classes.contents}>
                <MenuItem 
                    image = {scriptImageUrl}  
                    marginContents = "0px"  
                    mode = 'up'
                    marginTop = "120px"
                    src = {`${baseURL}/script`}
                    message = {labelMessage.ScriptMessage} 
                    read = {labelMessage.ScriptRead}>Script</MenuItem>

                <MenuItem 
                    image = {graphicImageUrl} 
                    marginContents = "60px" 
                    mode = 'down'
                    marginTop = "-20px"
                    src = {baseURL}
                    message = {labelMessage.GraphicMessage} 
                    read = {labelMessage.GraphicRead}>Graphic</MenuItem>

                <MenuItem 
                    image = {programImageUrl} 
                    marginContents = "60px" 
                    mode = 'up'
                    marginTop = "120px"
                    src = {baseURL}
                    message = {labelMessage.programMessage} 
                    read = {labelMessage.programRead}>Programming</MenuItem>
            </div>
        </>
    )

}