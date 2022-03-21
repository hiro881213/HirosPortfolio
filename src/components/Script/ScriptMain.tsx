import classes from './scss/ScriptMain.module.scss'
import { HomeLogo } from '../Common/HomeLogo'

export const ScriptMain = () => {

    let title = '脚本作品集';

    return (
        <>
            <main className={classes.mainClass}>
                <label id = 'scriptTitle'>脚本作品集</label>
            </main>

            <div className = {classes.homeLogoArea}>
                <HomeLogo />
            </div>
        </>
    )
}