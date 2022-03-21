import React from 'react'
import { useLocation } from 'react-router-dom';
import HTMLFlipBook from "react-pageflip";
import PAGE1 from '../../assets/scenario/story1/page1.jpg';
import PAGE2 from '../../assets/scenario/story1/page2.jpg';
import PAGE3 from '../../assets/scenario/story1/page3.jpg';
import PAGE4 from '../../assets/scenario/story1/page4.jpg';
import PAGE5 from '../../assets/scenario/story1/page5.jpg';

import classes from './scss/ReadScenarioMain.module.scss'

export const ReadScenarioMain = (props) => {

    // // ファイル読み込み処理
    // const importAll = (r) => {
    //     return r.keys().map(v => r(v));
    // }

    // GETパラメータを取得する
    const params = new URLSearchParams(useLocation().search);
    const target = params.get('story')

    // // Graphicsディレクトリの内部を全て取り出す
    // const images = importAll(require.context(`../../assets/scenario/story${target}`, true, /\.(jpg)$/));

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
                        <Page page = {PAGE1}></Page>
                        <Page page = {PAGE2}></Page>
                        <Page page = {PAGE3}></Page>
                        <Page page = {PAGE4}></Page>
                        <Page page = {PAGE5}></Page>
                    </HTMLFlipBook>
                </div>          
            </main>
        </>
    );
}