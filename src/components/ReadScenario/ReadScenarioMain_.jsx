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
    const Page = (props) => {
        return (
            <> 
                <div>
                    {/* <img src = {props.page} /> */}
                    <h1>Page Header</h1>
                    <p>{props.children}</p>
                    <p>Page number: {props.number}</p>
                </div>
            </>
        );
    };

    const bookOption  = {
        width: 500,
        height: 500,
        swipeDistance: 300,
        usePortrait: false,
        autoSize: false,
        showCover: true,
        startZIndex: 9
    };

    const BookData = () => {
        return (
            <HTMLFlipBook {...bookOption}>
                <div className = {classes.demoPage}>Page 1</div>
                <div className = {classes.demoPage}>Page 2</div>
                <div className = {classes.demoPage}>Page 3</div>
                <div className = {classes.demoPage}>Page 4</div>
                <div className = {classes.demoPage}>Page 5</div>
                <div className = {classes.demoPage}>Page 6</div>
                <div className = {classes.demoPage}>Page 7</div>
                <div className = {classes.demoPage}>Page 8</div>
                <div className = {classes.demoPage}>Page 9</div>
                <div className = {classes.demoPage}>Page 10</div>
            </HTMLFlipBook>
        );
    }

    return (
        <>
            <main className={classes.readScinario}>
                <div className = {classes.bookArea}>
                    <BookData></BookData>
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

                        {/* {
                            (() => {

                                const pagesElements = [];

                                // 対象ファイルを表示する
                                listOfImages.forEach((page) => {
                                    pagesElements.push(<Page page = {page}></Page>);
                                });

                                return pagesElements;

                            })()
                        } */}
