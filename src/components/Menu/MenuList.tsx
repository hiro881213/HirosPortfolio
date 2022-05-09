import MediaQuery from "react-responsive";
import './scss/MenuList.scss';

import { PcMenu } from "./PcMenu";
import { MenuItem } from './MenuItem';
import { SmartProfile } from "./SmartProfile";

import program from '../../assets/img/ProgramImage.jpg';
import script  from '../../assets/img/ScriptImage.jpg';
import graphic from '../../assets/img/GraphicImage.jpg'

export const MenuList = () => {

    let baseURL = "./";

    return (
        <>
            <MediaQuery query = '(max-width: 767px)'>
                <div className = 'posts-container'>
                    <h2>Road Of Contents Creator</h2>
                    <article className = 'post'>
                        <SmartProfile></SmartProfile>
                    </article>
                    <MenuItem src = {program} url = {`${baseURL}about`}>About</MenuItem>
                    <MenuItem src = {graphic} url = {`${baseURL}work`}>graphic</MenuItem>
                    <MenuItem src = {script}  url = {`${baseURL}script`}>Scenalio</MenuItem>
                </div>
            </MediaQuery>

            <MediaQuery query = '(min-width: 768px)'>
                <PcMenu></PcMenu>
            </MediaQuery>
        </>
    );
}