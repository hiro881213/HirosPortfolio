import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import { AboutBackImage } from './AboutBackImage'
import { AboutSkillArticle } from './AboutSkillArticle'

import oracleLogo from '../../assets/about/oracleLogo.png'
import mySQLLogo from '../../assets/about/mysqlLogo.jpg'
import githubLogo from '../../assets/about/githubLogo.jpg'

import './scss/About.scss';

export const AboutMain = () => {

    // -----------------------------------------------
    // フォルダ内ファイル取得処理
    // -----------------------------------------------

    const importAll = (r: any)  => {
        return r.keys().map(r);
    };

    // フロントエンドアイコンリスト
    const lstFrontImages:[] = importAll(require.context('../../assets/about/front', true, /\.(jpg)$/));

    // バックエンドアイコンリスト
    const lstBackImages:[] = importAll(require.context('../../assets/about/back', true, /\.(jpg)$/));

    // インフラアイコンリスト
    const lstInfrastructureImages:[] = importAll(require.context('../../assets/about/infrastructure', true, /\.(jpg)$/));

    return (
        <>
            <header className = 'workContainer w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>
            <main>
                <section>
                    <AboutBackImage></AboutBackImage>
                </section>

                <section className = 'w-container'>
                    <div className='skillArea'>
                        <h2>My Career</h2>
                    </div>
                </section>

                <section className = 'w-container'>
                    <div className='skillArea'>
                        <h2>Programming Skills</h2>
                        <h3>Frontend</h3>
                        <div className='skill-container'>
                            {lstFrontImages.map((lstFrontImage, index) => (
                                <AboutSkillArticle url = {lstFrontImage} key = {index}></AboutSkillArticle>
                            ))}
                        </div>

                        <h3>Backend</h3>
                        <div className='skill-container'>

                            {lstBackImages.map((lstBackImage, index) => (
                                <AboutSkillArticle url = {lstBackImage} key = {index}></AboutSkillArticle>
                            ))}
                        </div>

                        <h3>Database</h3>
                        <div className='skill-container'>
                            <AboutSkillArticle url = {oracleLogo}></AboutSkillArticle>
                            <AboutSkillArticle url = {mySQLLogo}></AboutSkillArticle>
                        </div>

                        <h3>Infrastructure</h3>
                        <div className='skill-container'>
                        {
                            lstInfrastructureImages.map((lstInfrastructureImage, index) => (
                                <AboutSkillArticle url = {lstInfrastructureImage} key = {index}></AboutSkillArticle>
                            ))
                        }
                        </div>

                        <h3>Other</h3>
                        <div className='skill-container'>
                            <AboutSkillArticle url = {githubLogo}></AboutSkillArticle>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}