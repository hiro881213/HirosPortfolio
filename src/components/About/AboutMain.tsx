import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import { AboutBackImage } from './AboutBackImage'
import { AboutSkillArticle } from './AboutSkillArticle'
import { AboutMyCareer } from './AboutMyCareer'
import oracleLogo from '../../assets/about/oracleLogo.png'
import mySQLLogo from '../../assets/about/mysqlLogo.jpg'
import githubLogo from '../../assets/about/githubLogo.jpg'
import recording from '../../assets/about/recording.jpg'
import senario from '../../assets/about/scenario.jpg'

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

    // クリエイティブソフトリスト
    const lstCreativeSoftImages:[] = importAll(require.context('../../assets/about/creativeSoft', true, /\.(jpg)$/));


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
                    <div className='careerArea'>
                        <h2>My Career</h2>
                        <ul>
                            <li style = {{paddingBottom: '60px'}}>2014年4月よりメーカー系SEのフルスタックエンジニアとしてDXを目的としたシステム開発に従事</li>
                            <li><AboutMyCareer id = '1'></AboutMyCareer></li>
                            <li><AboutMyCareer id = '2'></AboutMyCareer></li>
                            <li><AboutMyCareer id = '3'></AboutMyCareer></li>
                            <li><AboutMyCareer id = '4'></AboutMyCareer></li>
                            <li><AboutMyCareer id = '5'></AboutMyCareer></li>
                            <li><AboutMyCareer id = '6'></AboutMyCareer></li>
                            <li><AboutMyCareer id = '7'></AboutMyCareer></li>
                        </ul>
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

                <section className = 'w-container'>
                    <div className='creativeArea'>
                        <h2>Creative Skills</h2>

                        <h3>Software</h3>
                        <div className='skill-container'>
                        {
                            lstCreativeSoftImages.map((lstCreativeSoftImage, index) => (
                                <AboutSkillArticle url = {lstCreativeSoftImage} key = {index}></AboutSkillArticle>
                            ))
                        }
                        </div>

                        <h3>Other</h3>
                        <div className='skill-container'>
                            <AboutSkillArticle url = {recording}></AboutSkillArticle>
                            <AboutSkillArticle url = {senario}></AboutSkillArticle>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}