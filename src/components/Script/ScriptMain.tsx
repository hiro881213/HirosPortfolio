import classes from './scss/ScriptMain.module.scss';

import { HomeLogo } from '../Common/HomeLogo';
import { ScriptList } from './ScriptList';

export const ScriptMain = () => {

    let title = '脚本作品集';
    
    //DOM取得
    const text = document.querySelector('.text');


    return (
        <>
            <main className={classes.mainClass}>
                <div className='listScripts'>
                    <ScriptList></ScriptList>
                </div>
                <label>脚本作品集</label>
            </main>

            <div className = {classes.homeLogoArea}>
                <HomeLogo />
            </div>

            <footer>
                <div>
                    <p>Copyright 2021-2022 Hiro all right reserved.</p>
                </div>
            </footer>
        </>
    )
}