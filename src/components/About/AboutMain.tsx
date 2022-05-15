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
                    <div className='careerArea'>
                        <h2>My Career</h2>
                        <ul>
                            <li>
                                <div className='wrap'>
                                    <div className='title'><h3>輸出管理システム</h3></div>
                                    <div>
                                        <p>PHPからJava化</p>
                                        <p>PHPで実装されたシステムをJavaに変更およびレイアウトや仕様を効率化する</p>
                                        <p>要員：2人  工数：15人月</p>
                                        <br></br>
                                        <p>Linux/PHP/JavaScript/jQuety/Java8/JSP/MySQL/Tomcat/Struts2/VMWare</p>
                                        <p>設計/Webデザイン/実装/試験</p>
                                    </div>
                                </div>
                            </li>
                            <li>サーバリプレイス業務</li>
                            <li>報告書郵送管理基幹システム</li>
                            <li>画像管理基幹システム</li>
                            <li>資料登録閲覧システム</li>
                            <li>研究開発経理システム</li>
                            <li>製造部品管理基幹システム</li>
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
                    <div className='skillArea'>
                        <h2>Creative Skills</h2>
                    </div>
                </section>
            </main>


        </>
    )
}