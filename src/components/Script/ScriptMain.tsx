import { getUrl } from '../../CommonUtil'
import { LogoInf } from '../Common/LogoInf'
import { ScriptList } from './ScriptList';

import classes from './scss/ScriptMain.module.scss';

export const ScriptMain = () => {

    return (
        <>
            <header className = 'w-container'>
                <a href= {getUrl()}>
                    <LogoInf type = {1}></LogoInf>
                </a>
            </header>

            <main className={classes.mainClass}>
                <label>脚本作品集</label>
                <div className={classes.listScripts}>
                    <ScriptList></ScriptList>
                </div>
            </main>
        </>
    )
}