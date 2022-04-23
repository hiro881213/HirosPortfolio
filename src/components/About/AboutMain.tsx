import { useEffect } from 'react'

import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import editMovie from '../../assets/about/editMovie.jpg'
import program from '../../assets/about/programming.jpg'
import record from '../../assets/about/recording.jpg'
import settingAudio from '../../assets/about/settingAudio.jpg'

import './scss/About.scss';


export const AboutMain = () => {

    const src1  = {
        backgroundImage: `url(${editMovie})`,
    };
    const src2  = {
        backgroundImage: `url(${program})`,
        animationDelay: '4s',
    };
    const src3  = {
        backgroundImage: `url(${record})`,
        animationDelay: '8s',
    };
    const src4  = {
        backgroundImage: `url(${settingAudio})`,
        animationDelay: '12s',
    };

    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>

            <section className='allAbout'>
                <div style = {src1} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
                <div style = {src2} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
                <div style = {src3} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
                <div style = {src4} className='bgImg'>
                    <h1>HIRO'S<br/>VISION<br/>SKILLS</h1>
                </div>
            </section>

            {/* <img src = {image}></img> */}

        </>
    )
}