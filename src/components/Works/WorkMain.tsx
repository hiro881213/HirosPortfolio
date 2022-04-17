import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'

import './scss/work.scss';

export const WorkMain = () => {

    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>
            <section className = 'workTitle'>
                <h1>Works</h1>
            </section>
        </>
    );

}