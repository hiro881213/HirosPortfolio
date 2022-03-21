import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HTMLFlipBook from "react-pageflip";

import classes from './scss/ReadScenarioMain.module.scss'

import PAGE1 from '../../assets/scenario/story1/page1.jpg';
import PAGE2 from '../../assets/scenario/story1/page2.jpg';
import PAGE3 from '../../assets/scenario/story1/page3.jpg';
import PAGE4 from '../../assets/scenario/story1/page4.jpg';
import PAGE5 from '../../assets/scenario/story1/page5.jpg';

export const ReadScenarioMain = (props) => {

    // GETパラメータを取得する
    const params = new URLSearchParams(useLocation().search);
    const target = params.get('story')

    // const baseURL = "../"

    const Page = React.forwardRef((props, ref={ref}) => {
        return (
            <>
                <img src = {props.page} />
            </>
        );
    });

    return (
        <>
            <main className={classes.readScinario}>
                <div>
                    <HTMLFlipBook width={800} height={500}>
                        <Page page = {PAGE1}>PAGE1</Page>
                        <Page page = {PAGE2}>PAGE2</Page>
                        <Page page = {PAGE3}>PAGE3</Page>
                        <Page page = {PAGE4}>PAGE4</Page>
                        <Page page = {PAGE5}>PAGE5</Page>
                    </HTMLFlipBook>
                </div>          
            </main>
        </>
    );
}