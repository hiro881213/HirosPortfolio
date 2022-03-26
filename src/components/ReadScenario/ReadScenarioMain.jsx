import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "turn.js";

import "./styles.css";

class Turn extends React.Component {

    static defaultProps = {
        style: {},
        className: "",
        options: {}
    };

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

        // 先頭ボタンクリックイベントを追加
        document.getElementById('first').addEventListener("click", this.handleFirstButton, false);


    }

    componentWillUnmount = () => {

        if (this.el) {
            $(this.el).turn("destroy").remove();
        }

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

    // ----------------------------------------
    // 先頭ボタン押下処理
    // ----------------------------------------

    handleFirstButton = () => {
        $(this.el).turn('page',6);
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

const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: "double",
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    when: {
        turned: function(e, page) {
        console.log("Current view: ", $(this).turn("view"));
        }
    },
    // direction: 'ltr'
    direction: "rtl"
};

const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
];

// ------------------------------------------------
// ページ読み込み処理
// ------------------------------------------------

export const ReadScenarioMain = () => {

    return (
        <>
            {
                // オンロード関数
                window.onload = function() {

                    // ページを先頭に移動
                    document.getElementById('first').click();

                }

            }

            <Turn  options={options} className="magazine">
                {pages.map((page, index) => (
                    <div key={index} className="page">
                        <img src={page} alt="" />
                    </div>
                ))}
            </Turn>

            <button id = 'next'>⇦⇦Next</button>
            <button id = 'prev'>Prev⇨⇨</button>
            <button id = 'first'>先頭</button>
            
            
        </>
    );
};
