import React, { useEffect, useRef } from 'react';

import { PcProfile } from "./PcProfile";
import { TitleItem } from "./TitleItem";
import { MenuItem } from './MenuItem';

import program from '../../assets/img/ProgramImage.jpg';
import script  from '../../assets/img/ScriptImage.jpg';
import graphic from '../../assets/img/GraphicImage.jpg'


export const PcMenu = () => {

    let baseURL = "./";

    const screenRef = useRef<HTMLDivElement>(null);
    const winWidth = 570;
    useEffect(() => {

        screenRef.current!.onwheel = ev => {

            ev.preventDefault()

            let delta = (ev.deltaY / Math.abs(ev.deltaY)) * winWidth

            if (delta > 0) {
                delta += screenRef.current!.scrollLeft
                delta = Math.floor(delta / winWidth) * winWidth
            } else {
                delta += screenRef.current!.scrollLeft
                delta = Math.ceil(delta / winWidth) * winWidth
            }

            screenRef.current!.scrollLeft = delta

        }

    }, []);


    return (
        <>
            <div ref = { screenRef } className = 'posts-container'>
                <article className = 'post'>
                    <h2>Road Of Contents Creator</h2>
                    <PcProfile></PcProfile>
                </article>

                <article>
                    <TitleItem></TitleItem>
                </article>
                <MenuItem src = {program} url = {`${baseURL}about`}>About</MenuItem>
                <MenuItem src = {graphic} url = {`${baseURL}work`}>graphic</MenuItem>
                <MenuItem src = {script}  url = {`${baseURL}script`}>Scenalio</MenuItem>
            </div>
        </>
    );

}