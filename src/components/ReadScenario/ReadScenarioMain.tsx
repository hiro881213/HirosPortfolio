import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import classes from './scss/ReadScenarioMain.module.scss'

export const ReadScenarioMain = (props:any) => {

    // GETパラメータを取得する
    const params = new URLSearchParams(useLocation().search);
    const target = params.get('story')

    const baseURL = "../"

    return (
        <>
            <main className={classes.readScinario}>
                <Link to = {`${baseURL}/script`}>戻る</Link>
                <label>シナリオを読もう</label>
            </main>
        </>
    );
}