"use strict";
exports.__esModule = true;
exports.AboutMain = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var AboutBackImage_1 = require("./AboutBackImage");
var AboutSkillArticle_1 = require("./AboutSkillArticle");
var AboutMyCareer_1 = require("./AboutMyCareer");
var oracleLogo_png_1 = require("../../assets/about/oracleLogo.png");
var mysqlLogo_jpg_1 = require("../../assets/about/mysqlLogo.jpg");
var githubLogo_jpg_1 = require("../../assets/about/githubLogo.jpg");
var recording_jpg_1 = require("../../assets/about/recording.jpg");
var scenario_jpg_1 = require("../../assets/about/scenario.jpg");
require("./scss/About.scss");
exports.AboutMain = function () {
    var pathname = react_router_dom_1.useLocation().pathname;
    react_1.useEffect(function () {
        window.scrollTo(0, 0);
    }, [pathname]);
    // -----------------------------------------------
    // フォルダ内ファイル取得処理
    // -----------------------------------------------
    var importAll = function (r) {
        return r.keys().map(r);
    };
    // フロントエンドアイコンリスト
    var lstFrontImages = importAll(require.context('../../assets/about/front', true, /\.(jpg)$/));
    // バックエンドアイコンリスト
    var lstBackImages = importAll(require.context('../../assets/about/back', true, /\.(jpg)$/));
    // インフラアイコンリスト
    var lstInfrastructureImages = importAll(require.context('../../assets/about/infrastructure', true, /\.(jpg)$/));
    // クリエイティブソフトリスト
    var lstCreativeSoftImages = importAll(require.context('../../assets/about/creativeSoft', true, /\.(jpg)$/));
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: 'workContainer w-container' },
            React.createElement("a", { href: CommonUtil_1.getUrl() },
                React.createElement(LogoInf_1.LogoInf, { type: 1 }))),
        React.createElement("main", null,
            React.createElement("section", null,
                React.createElement(AboutBackImage_1.AboutBackImage, null)),
            React.createElement("section", { className: 'careerAreaColor' },
                React.createElement("div", { className: 'w-container careerArea' },
                    React.createElement("h2", null, "My Career"),
                    React.createElement("ul", null,
                        React.createElement("li", { style: { paddingBottom: '60px' } }, "2014\u5E744\u6708\u3088\u308A\u30E1\u30FC\u30AB\u30FC\u7CFBSE\u306E\u30D5\u30EB\u30B9\u30BF\u30C3\u30AF\u30A8\u30F3\u30B8\u30CB\u30A2\u3068\u3057\u3066DX\u3092\u76EE\u7684\u3068\u3057\u305F\u30B7\u30B9\u30C6\u30E0\u958B\u767A\u306B\u5F93\u4E8B"),
                        React.createElement("li", null,
                            React.createElement(AboutMyCareer_1.AboutMyCareer, { id: '1' })),
                        React.createElement("li", null,
                            React.createElement(AboutMyCareer_1.AboutMyCareer, { id: '2' })),
                        React.createElement("li", null,
                            React.createElement(AboutMyCareer_1.AboutMyCareer, { id: '3' })),
                        React.createElement("li", null,
                            React.createElement(AboutMyCareer_1.AboutMyCareer, { id: '4' })),
                        React.createElement("li", null,
                            React.createElement(AboutMyCareer_1.AboutMyCareer, { id: '5' })),
                        React.createElement("li", null,
                            React.createElement(AboutMyCareer_1.AboutMyCareer, { id: '6' })),
                        React.createElement("li", null,
                            React.createElement(AboutMyCareer_1.AboutMyCareer, { id: '7' }))))),
            React.createElement("section", { className: 'skillAreaColor' },
                React.createElement("div", { className: 'skillArea w-container' },
                    React.createElement("h2", null, "Programming Skills"),
                    React.createElement("h3", null, "Frontend"),
                    React.createElement("div", { className: 'skill-container' }, lstFrontImages.map(function (lstFrontImage, index) { return (React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: lstFrontImage, key: index })); })),
                    React.createElement("h3", null, "Backend"),
                    React.createElement("div", { className: 'skill-container' }, lstBackImages.map(function (lstBackImage, index) { return (React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: lstBackImage, key: index })); })),
                    React.createElement("h3", null, "Database"),
                    React.createElement("div", { className: 'skill-container' },
                        React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: oracleLogo_png_1["default"] }),
                        React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: mysqlLogo_jpg_1["default"] })),
                    React.createElement("h3", null, "Infrastructure"),
                    React.createElement("div", { className: 'skill-container' }, lstInfrastructureImages.map(function (lstInfrastructureImage, index) { return (React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: lstInfrastructureImage, key: index })); })),
                    React.createElement("h3", null, "Other"),
                    React.createElement("div", { className: 'skill-container' },
                        React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: githubLogo_jpg_1["default"] })))),
            React.createElement("section", { className: 'w-container' },
                React.createElement("div", { className: 'creativeArea' },
                    React.createElement("h2", null, "Creative Skills"),
                    React.createElement("h3", null, "Software"),
                    React.createElement("div", { className: 'skill-container' }, lstCreativeSoftImages.map(function (lstCreativeSoftImage, index) { return (React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: lstCreativeSoftImage, key: index })); })),
                    React.createElement("h3", null, "Other"),
                    React.createElement("div", { className: 'skill-container' },
                        React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: recording_jpg_1["default"] }),
                        React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: scenario_jpg_1["default"] })))))));
};
