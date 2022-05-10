import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import { AboutBackImage } from './AboutBackImage'
import htmlLogo from '../../assets/about/htmlLogo.jpg'
import cssLogo from '../../assets/about/cssLogo.jpg'
import jsLogo from '../../assets/about/jsLogo.jpg'
import jQueryLogo from '../../assets/about/jQueryLogo.jpg'
import sassLogo from '../../assets/about/sassLogo.jpg'
import angularLogo from '../../assets/about/angularLogo.jpg'
import reactLogo from '../../assets/about/reactLogo.jpg'
import javaLogo from '../../assets/about/javaLogo.jpg'
import springLogo from '../../assets/about/springLogo.jpg'
import phpLogo from '../../assets/about/phpLogo.jpg'
import javaEELogo from '../../assets/about/javaEELogo.jpg'
import oracleLogo from '../../assets/about/oracleLogo.png'
import mySQLLogo from '../../assets/about/mysqlLogo.jpg'
import redhatLogo from '../../assets/about/redhatLogo.jpg'
import vmwareLogo from '../../assets/about/vmwareLogo.jpg'
import linuxLogo from '../../assets/about/linuxLogo.jpg'

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
                <div className='skillArea'>
                    <h2>Programming Skills</h2>
                    <h3>Frontend</h3>
                    <div className='skill-container'>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {htmlLogo} />
                            </figure>
                        </article>

                        <article className = 'skillPost'>
                            <figure>
                                <img src = {cssLogo} />
                            </figure>
                        </article>

                        <article className = 'skillPost'>
                            <figure>
                                <img src = {jsLogo} />
                            </figure>
                        </article>

                        <article className = 'skillPost'>
                            <figure>
                                <img src = {jQueryLogo} />
                            </figure>
                        </article>

                        <article className = 'skillPost'>
                            <figure>
                                <img src = {sassLogo} />
                            </figure>
                        </article>

                        <article className = 'skillPost'>
                            <figure>
                                <img src = {angularLogo} />
                            </figure>
                        </article>

                        <article className = 'skillPost'>
                            <figure>
                                <img src = {reactLogo} />
                            </figure>
                        </article>
                    </div>
                    <h3>Backend</h3>
                    <div className='skill-container'>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {javaLogo} />
                            </figure>
                        </article>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {springLogo} />
                            </figure>
                        </article>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {javaEELogo} />
                            </figure>
                        </article>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {phpLogo} />
                            </figure>
                        </article>
                    </div>
                    <h3>Database</h3>
                    <div className='skill-container'>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {oracleLogo} />
                            </figure>
                        </article>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {mySQLLogo} />
                            </figure>
                        </article>
                    </div>
                    <h3>Infrastructure</h3>
                    <div className='skill-container'>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {redhatLogo} />
                            </figure>
                        </article>
                        <article className = 'skillPost'>
                            <figure>
                                <img src = {vmwareLogo} />
                            </figure>
                        </article>

                        <article className = 'skillPost'>
                            <figure>
                                <img src = {linuxLogo} />
                            </figure>
                        </article>

                    </div>
                </div>
            </section>
        </>
    )
}