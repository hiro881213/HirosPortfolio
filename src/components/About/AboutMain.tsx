import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import { AboutBackImage } from './AboutBackImage'
import test from '../../assets/about/editMovie.jpg'
import './scss/About.scss';

export const AboutMain = () => {

    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>

            <section>
                <AboutBackImage></AboutBackImage>
            </section>

            <section className = 'w-container'>
                AAAA
            </section>
        </>
    )
}