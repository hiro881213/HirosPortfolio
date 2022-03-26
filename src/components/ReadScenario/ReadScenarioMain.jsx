import React from "react";
import ReactDOM from "react-dom";
import { useLocation, Link } from 'react-router-dom';
import $ from "jquery";
import "turn.js";

import "./styles.css";

class Turn extends React.Component {

    static defaultProps = {
        style: {},
        className: "",
        options: {}
    };

    // -----------------------------------------
    // イベントマウント処理
    // -----------------------------------------

    componentDidMount = () => {
        
        if (this.el) {
            $(this.el).turn(Object.assign({}, this.props.options));
        }
        
        // キーダウンイベントを追加
        document.addEventListener("keydown", this.handleKeyDown, false);
        
        // Nextボタンクリックイベントを追加
        document.getElementById('next').addEventListener("click",this.handleNextButton, false);

        // Prevボタンクリックイベントを追加
        document.getElementById('prev').addEventListener("click", this.handleprevButton, false);

    }

    // -----------------------------------------
    // イベントアンマウント処理
    // -----------------------------------------

    componentWillUnmount = () => {

        // if (this.el) {
        //     $(this.el).turn("destroy").remove();
        // }

        // キーダウンイベントをアンマウント
        document.removeEventListener("keydown", this.handleKeyDown, false);
        
        //　Nextボタンクリックイベントをアンマウント
        document.getElementById('next').removeEventListener("click",this.handleNextButton, false);

        // Prevボタンクリックイベントをアンマウント
        document.getElementById('prev').removeEventListener("click", this.handleprevButton, false);

    }

    // ----------------------------------------
    // Prevボタン押下処理
    // ----------------------------------------

    handleKeyDown = event => {
        if (event.keyCode === 37) {
            $(this.el).turn("previous");
        }
    
        if (event.keyCode === 39) {
            $(this.el).turn("next");
        }
    };

    // ----------------------------------------
    // Nextボタン押下処理
    // ----------------------------------------

    handleNextButton = () => {
        $(this.el).turn("previous");
    }

    // ----------------------------------------
    // Prevボタン押下処理
    // ----------------------------------------

    handleprevButton = () => {
        $(this.el).turn("next");
    }

    render() {
        return (
        <>
            <div
                className={this.props.className}
                style={Object.assign({}, this.props.style)}
                ref={el => (this.el = el)}>
                {this.props.children}
            </div>
        </>
        );
    }

}

// ------------------------------------------------
// ファイル名切り出し処理
// ------------------------------------------------

const filterData = (str, target) => {

    const arr = str.split('.')

    let count = 0;
    let x = -1;

    arr.forEach((val) => {

        if (val.indexOf(target) > -1 && x === -1) {
            x = count;
        } else {
            count++;
        }

    });

    return arr[x];

}

let pages = [];

// ------------------------------------------------
// ページ読み込み処理
// ------------------------------------------------

export const ReadScenarioMain = () => {

    // GETパラメータを取得する
    const params = new URLSearchParams(useLocation().search);
    const target = params.get('story')
    
    // -----------------------------------------------
    // フォルダ内ファイル取得処理
    // -----------------------------------------------

    const importAll = (r)  => {
        return r.keys().map(r);
    };
    
    // -----------------------------------------------
    // フォルダ内ファイルインポート処理
    // -----------------------------------------------

    function componentWillMount() {

        let lstImages = [];

        if (target === '1') {
            lstImages = importAll(require.context('../../assets/scenario/scenario1/', true, /\.(jpg)$/));

        } else if (target === '2') {
            lstImages = importAll(require.context('../../assets/scenario/scenario2/', true, /\.(jpg)$/));
        }

        return lstImages;
    
    }
    // -----------------------------------------------

    // 脚本データを取得する
    const listOfImages = componentWillMount();
    const dataPage = [];

    // 対象ファイルを表示する
    listOfImages.forEach((page) => {
        dataPage.push(page);
    });

    pages = dataPage.sort((a, b) =>{ 
        return  filterData(b, "page").replace(/[^0-9]/g, '') - filterData(a, "page").replace(/[^0-9]/g, '');
    });

    // TURNJSオプション
    const options = {
        width: 1200,
        height: 700,
        autoCenter: true,
        display: "double",
        acceleration: true,
        elevation: 50,
        gradients: !$.isTouch,
        when: {
            turned: function(e, page) {
            }
        },
        // direction: 'ltr'
        direction: "rtl",
        page: pages.length
    };

    return (
        <>

            <Turn  options={options} className="magazine">
                {pages.map((page, index) => (
                    <div key={index} className="page">
                        <img src={page} alt="" />
                    </div>
                ))}
            </Turn>
            <div style = {{textAlign: 'center'}}>
                <button id = 'next'>⇦⇦Next</button>
                <button id = 'prev'>Prev⇨⇨</button>
            </div>
            <div className="button">
                <Link to = '../script'>
                    <button>Go Back</button>
                </Link>
            </div>

        </>
    );
};
