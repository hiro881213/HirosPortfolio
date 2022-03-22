import React from 'react'
import { useLocation } from 'react-router-dom';
import HTMLFlipBook from "react-pageflip";
import { Link } from 'react-router-dom';

import classes from './scss/ReadScenarioMain.module.scss'

// シナリオデータ取得・表示処理
export const ReadScenarioMain = (props) => {

    // GETパラメータを取得する
    const params = new URLSearchParams(useLocation().search);
    const target = params.get('story')

    // フォルダ内ファイル取得処理
    const importAll = (r)  => {
        return r.keys().map(r);
    };
    
    // フォルダ内ファイルインポート処理
    function componentWillMount() {

        let lstImages = [];

        if (target === '1') {
            lstImages = importAll(require.context('../../assets/scenario/story01/', true, /\.(jpg)$/));

        } else if (target === '2') {
            lstImages = importAll(require.context('../../assets/scenario/story2/', true, /\.(jpg)$/));
            console.log(lstImages);
        }

        return lstImages;

    }

    // 脚本データを取得する
    const listOfImages = componentWillMount();

    // Pageを定義する
    const Page = React.forwardRef((props, ref={ref}) => {
        return (
            <> 
                <div>
                    <img src = {props.page} />
                </div>
            </>
        );
    });

    return (
        <>
            <main className={classes.readScinario}>
                <div>
                    <HTMLFlipBook width={800} height={500} drawShadow = {true}>
                    {
                        (() => {

                            const pagesElements = [];

                            // 対象ファイルを表示する
                            listOfImages.forEach((page) => {
                                pagesElements.push(<Page page = {page}></Page>);
                            });

                            return pagesElements;

                        })()
                    }
                    </HTMLFlipBook>

                    <div className={classes.button}>
                        <Link to = '../script'>
                            <button>Go Back</button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}