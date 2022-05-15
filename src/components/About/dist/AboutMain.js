"use strict";
exports.__esModule = true;
exports.AboutMain = void 0;
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var AboutBackImage_1 = require("./AboutBackImage");
var AboutSkillArticle_1 = require("./AboutSkillArticle");
var oracleLogo_png_1 = require("../../assets/about/oracleLogo.png");
var mysqlLogo_jpg_1 = require("../../assets/about/mysqlLogo.jpg");
var githubLogo_jpg_1 = require("../../assets/about/githubLogo.jpg");
require("./scss/About.scss");
exports.AboutMain = function () {
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
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: 'workContainer w-container' },
            React.createElement("a", { href: CommonUtil_1.getUrl() },
                React.createElement(LogoInf_1.LogoInf, { type: 1 }))),
        React.createElement("main", null,
            React.createElement("section", null,
                React.createElement(AboutBackImage_1.AboutBackImage, null)),
            React.createElement("section", { className: 'w-container' },
                React.createElement("div", { className: 'careerArea' },
                    React.createElement("h2", null, "My Career"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("div", { className: 'wrap' },
                                React.createElement("div", { className: 'title' },
                                    React.createElement("h3", null, "\u8F38\u51FA\u7BA1\u7406\u30B7\u30B9\u30C6\u30E0")),
                                React.createElement("div", null,
                                    React.createElement("p", null, "PHP\u304B\u3089Java\u5316"),
                                    React.createElement("p", null, "PHP\u3067\u5B9F\u88C5\u3055\u308C\u305F\u30B7\u30B9\u30C6\u30E0\u3092Java\u306B\u5909\u66F4\u304A\u3088\u3073\u30EC\u30A4\u30A2\u30A6\u30C8\u3084\u4ED5\u69D8\u3092\u52B9\u7387\u5316\u3059\u308B"),
                                    React.createElement("p", null, "\u8981\u54E1\uFF1A2\u4EBA  \u5DE5\u6570\uFF1A15\u4EBA\u6708"),
                                    React.createElement("br", null),
                                    React.createElement("p", null, "Linux/PHP/JavaScript/jQuety/Java8/JSP/MySQL/Tomcat/Struts2/VMWare"),
                                    React.createElement("p", null, "\u8A2D\u8A08/Web\u30C7\u30B6\u30A4\u30F3/\u5B9F\u88C5/\u8A66\u9A13")))),
                        React.createElement("li", null, "\u30B5\u30FC\u30D0\u30EA\u30D7\u30EC\u30A4\u30B9\u696D\u52D9"),
                        React.createElement("li", null, "\u5831\u544A\u66F8\u90F5\u9001\u7BA1\u7406\u57FA\u5E79\u30B7\u30B9\u30C6\u30E0"),
                        React.createElement("li", null, "\u753B\u50CF\u7BA1\u7406\u57FA\u5E79\u30B7\u30B9\u30C6\u30E0"),
                        React.createElement("li", null, "\u8CC7\u6599\u767B\u9332\u95B2\u89A7\u30B7\u30B9\u30C6\u30E0"),
                        React.createElement("li", null, "\u7814\u7A76\u958B\u767A\u7D4C\u7406\u30B7\u30B9\u30C6\u30E0"),
                        React.createElement("li", null, "\u88FD\u9020\u90E8\u54C1\u7BA1\u7406\u57FA\u5E79\u30B7\u30B9\u30C6\u30E0")))),
            React.createElement("section", { className: 'w-container' },
                React.createElement("div", { className: 'skillArea' },
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
                React.createElement("div", { className: 'skillArea' },
                    React.createElement("h2", null, "Creative Skills"))))));
};
