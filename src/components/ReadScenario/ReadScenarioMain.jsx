import React from 'react'
import { useLocation } from 'react-router-dom';
import HTMLFlipBook from "react-pageflip";
import PAGE1 from '../../assets/scenario/story1/page1.jpg';
import PAGE2 from '../../assets/scenario/story1/page2.jpg';
import PAGE3 from '../../assets/scenario/story1/page3.jpg';
import PAGE4 from '../../assets/scenario/story1/page4.jpg';
import PAGE5 from '../../assets/scenario/story1/page5.jpg';
import PAGE6 from '../../assets/scenario/story1/page6.jpg';
import PAGE7 from '../../assets/scenario/story1/page7.jpg';
import PAGE8 from '../../assets/scenario/story1/page8.jpg';
import PAGE9 from '../../assets/scenario/story1/page9.jpg';
import PAGE10 from '../../assets/scenario/story1/page10.jpg';
import PAGE11 from '../../assets/scenario/story1/page11.jpg';
import PAGE12 from '../../assets/scenario/story1/page12.jpg';

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

    const pages = [
        PAGE1, PAGE2, PAGE3, PAGE4, PAGE5, PAGE6, PAGE7, PAGE8, PAGE9, PAGE10, PAGE11, PAGE12
    ];

    return (
        <>
            <main className={classes.readScinario}>
                <div>
                    <HTMLFlipBook width={800} height={500} drawShadow = {true}>
                    {
                        (() => {

                            const pagesElements = [];

                            pages.forEach((page) => {

                                pagesElements.push(<Page page = {page}></Page>);

                            });

                            return pagesElements;

                        })()
                    }
                    </HTMLFlipBook>
                </div>
            </main>
        </>
    );
}