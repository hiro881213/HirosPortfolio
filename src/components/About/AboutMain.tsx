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
        animationDelay: '3s',
    };
    const src3  = {
        backgroundImage: `url(${record})`,
        animationDelay: '6s',
    };
    const src4  = {
        backgroundImage: `url(${settingAudio})`,
        animationDelay: '9s',
    };

    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>

            <section className='allAbout'>
                <div style = {src1} className='bgImg'></div>
                <div style = {src2} className='bgImg'></div>
                <div style = {src3} className='bgImg'></div>
                <div style = {src4} className='bgImg'></div>
            </section>

            {/* <img src = {image}></img> */}

        </>
    )
}