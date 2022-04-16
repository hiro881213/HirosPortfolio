import MediaQuery from "react-responsive";
import './scss/MenuList.scss';

import { MenuItem } from './MenuItem';
import { SmartProfile } from "./SmartProfile";
import { PcProfile } from "./PcProfile";
import { TitleItem } from "./TitleItem";

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
                        <PcProfile></PcProfile>
                    </MediaQuery>
                </article>

                <MediaQuery query = '(min-width: 768px)'>
                    <article>
                        <TitleItem></TitleItem>
                    </article>
                </MediaQuery>


                <MenuItem src = {graphic} url = {`${baseURL}graphic`}>graphic</MenuItem>
                <MenuItem src = {script}  url = {`${baseURL}script`}>Scenalio</MenuItem>
                <MenuItem src = {program}>Programming</MenuItem>
            </div>
        </>
    );
}