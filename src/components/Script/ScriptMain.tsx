import classes from './scss/ScriptMain.module.scss'
import { HomeLogo } from '../Common/HomeLogo'

export const ScriptMain = () => {

    let title = '脚本作品集';
    
    //DOM取得
    const text = document.querySelector('.text');


    return (
        <>
            <main className={classes.mainClass}>
                <div className='listScripts'>AAAA</div>
                <label>脚本作品集</label>
            </main>

            <div className = {classes.homeLogoArea}>
                <HomeLogo />
            </div>
        </>
    )
}