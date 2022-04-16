import MediaQuery from "react-responsive";
import './scss/MenuList.scss';

import { MenuItem } from './MenuItem';
import { SmartProfile } from "./SmartProfile";

import program from '../../assets/img/ProgramImage.jpg';
import script  from '../../assets/img/ScriptImage.jpg';
import graphic from '../../assets/img/GraphicImage.jpg'

export const MenuList = () => {

    let baseURL = "./";

    return (
        <>
            <div className = 'posts-container'>
                    <article className = 'post'>
                        <h2>Road Of Contents Creator</h2>
                        <MediaQuery query = '(max-width: 767px)'>
                            <SmartProfile></SmartProfile>
                        </MediaQuery>

                        <MediaQuery query = '(min-width: 768px)'>
                            <h3>Name: F.T.Hiro</h3>

                            <h3>Degree: Master of Engineering</h3>

                            <h3>Career: System Engineer In SIer Company</h3>

                            <h3>Position: PM & Full Stack Engineer</h3>

                            <h3>Other Skill:</h3>
                            <h3 style = {{paddingLeft: '20px'}}>Scenario writing</h3>
                            <h3 style = {{paddingLeft: '20px'}}>Video Production</h3>
                            <h3 style = {{paddingLeft: '20px'}}>Video Editing</h3>

                        </MediaQuery>
                    </article>

                    <MediaQuery query = '(min-width: 768px)'>
                        <article>
                            <h1>HIRO'S<br/>PORTFOLIO</h1>
                        </article>
                    </MediaQuery>


                    <MenuItem src = {graphic} url = {`${baseURL}graphic`}>graphic</MenuItem>
                    <MenuItem src = {script}  url = {`${baseURL}script`}>Scenalio</MenuItem>
                    <MenuItem src = {program}>Programming</MenuItem>
            </div>
        </>
    );
}