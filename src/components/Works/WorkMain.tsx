import { Link } from 'react-router-dom';

import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import  IMG01 from "../../assets/graphics/IMG01.jpg"


import './scss/work.scss';

export const WorkMain = () => {

    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>
            <section className = 'graphics w-container'>
                <div className = 'workTitle'>
                    <h1>Works</h1>
                </div>

                <div className = 'graphicsContainer'>
                    <article className = 'graphic'>
                        <Link to = '#'>
                            <figure>
                                <img src = {IMG01} alt = 'image'></img>
                            </figure>
                        </Link>
                    </article>
                </div>

            </section>
        </>
    );

}