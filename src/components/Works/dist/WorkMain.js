"use strict";
exports.__esModule = true;
exports.WorkMain = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var WorkItems_1 = require("./WorkItems");
var WorkDetail_1 = require("./WorkDetail");
require("./scss/work.scss");
exports.WorkMain = function () {
    var pathname = react_router_dom_1.useLocation().pathname;
    react_1.useEffect(function () {
        window.scrollTo(0, 0);
    }, [pathname]);
    // ファイル読み込み処理
    var importAll = function (r) {
        return r.keys().map(function (v) { return r(v); });
    };
    // Graphicsディレクトリの内部を全て取り出す
    var images = importAll(require.context('../../assets/graphics', true, /\.(jpg)$/));
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: 'workContainer w-container' },
            React.createElement("a", { href: CommonUtil_1.getUrl() },
                React.createElement(LogoInf_1.LogoInf, { type: 1 }))),
        React.createElement("div", { className: 'workTitle' },
            React.createElement("h1", null, "Works")),
        React.createElement("section", { className: 'graphics' },
            React.createElement("div", { className: 'graphicsContainer w-container' }, (function () {
                // ファイル一覧リストを生成する
                var items = [];
                // ファイル一覧リストに各画像をセットする
                images.forEach(function (image, index) {
                    items.push(React.createElement(WorkItems_1.WorkItems, { pictUrl: image, target: index + 1, key: image }));
                });
                return items;
            })())),
        React.createElement("section", { className: 'workDetail' },
            React.createElement("div", { className: 'workTitle titleSpace' },
                React.createElement("h1", null, "Detail Works")),
            React.createElement("div", null, (function () {
                var detailItems = [];
                images.forEach(function (image, index) {
                    detailItems.push(React.createElement(WorkDetail_1.WorkDetail, { pictUrl: image }, index + 1));
                });
                return detailItems;
            })()))));
};
