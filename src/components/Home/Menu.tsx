import type { VFC } from "react";
import { MenuItem } from './MenuItem';
import classes from './scss/Menu.module.scss';

import message from '../../assets/textLabels/textlabelMenu.json';

import { getUrl } from '../../CommonUtil';

import scriptImageUrl from "../../assets/img/ScriptImage.jpg";
import graphicImageUrl from "../../assets/img/GraphicImage.jpg";
import programImageUrl from "../../assets/img/ProgramImage.jpg";

export const Menu: VFC = () => {

    const labelMessage = message;
    let baseURL = "./";

    return(
        <>  
            <div className={classes.contents}>
                <MenuItem 
                    image = {scriptImageUrl}  
                    marginContents = "0px"  
                    mode = 'up'
                    marginTop = "-100px"
                    src = {`${baseURL}script`}
                    message = {labelMessage.ScriptMessage} 
                    read = {labelMessage.ScriptRead}>Scenario</MenuItem>

                <MenuItem 
                    image = {graphicImageUrl} 
                    marginContents = "0px"
                    mode = 'down'
                    marginTop = "20px"
                    src = {`${baseURL}graphic`}
                    message = {labelMessage.GraphicMessage} 
                    read = {labelMessage.GraphicRead}>Graphic</MenuItem>

                <MenuItem 
                    image = {programImageUrl} 
                    marginContents = "0px"
                    mode = 'up'
                    marginTop = "-100px"
                    src = {baseURL}
                    message = {labelMessage.programMessage} 
                    read = {labelMessage.programRead}>Programming</MenuItem>
            </div>
        </>
    )

}