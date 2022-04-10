import './scss/MenuList.scss';

import { MenuItem } from './MenuItem';

import program from '../../assets/img/ProgramImage.jpg';
import script  from '../../assets/img/ScriptImage.jpg';
import graphic from '../../assets/img/GraphicImage.jpg'

export const MenuList = () => {

    let baseURL = "./";

    return (
        <>
            <div className = 'posts-container'>
                <MenuItem src = {graphic} url = {`${baseURL}graphic`}></MenuItem>
                <MenuItem src = {script}  url = {`${baseURL}script`}></MenuItem>
                <MenuItem src = {program}></MenuItem>
            </div>
        </>
    );
}