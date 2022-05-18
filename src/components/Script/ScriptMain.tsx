import MediaQuery from "react-responsive";
import { Link } from 'react-router-dom';

import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import { ScriptList } from './ScriptList';

import story1 from '../../assets/scenario/scenario1/page1.jpg';
import story2 from '../../assets/scenario/scenario2/page1.jpg';
import story3 from '../../assets/scenario/scenario3/page1.jpg';

import classes from './scss/ScriptMain.module.scss';

export const ScriptMain = () => {

    const baseURL = "../"

    return (
        <>
            <header className = 'w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>
            <MediaQuery query = '(min-width: 768px)'>
                <main className={classes.mainClass}>
                    <label>脚本作品集</label>
                    <div className={classes.listScripts}>
                        <ScriptList></ScriptList>
                    </div>
                </main>
            </MediaQuery>
            <MediaQuery query = '(max-width: 767px)'>
                <div className= {classes.mainClass}>
                    <label>脚本作品集</label>
                    <div style = {{padding: "150px 0"}}>
                        <Link to = {`${baseURL}detailScenario?story=1`}>
                            <img src={story1} alt = {"scenario1"} className={classes.scriptImg} />
                        </Link>
                    </div>
                    zzz
                    <div>
                        <Link to = {`${baseURL}detailScenario?story=2`}>
                            <img src={story2} alt = {"scenario2"} className={classes.scriptImg} />
                        </Link>
                    </div>
                    <div>
                        <Link to = {`${baseURL}detailScenario?story=3`}>
                            <img src={story3} alt = {"scenario3"} className={classes.scriptImg} />
                        </Link>
                    </div>
                </div>
            </MediaQuery>
        </>
    )
}