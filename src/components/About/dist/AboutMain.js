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
                React.createElement("div", { className: 'skillArea' },
                    React.createElement("h2", null, "My Career"))),
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
                        React.createElement(AboutSkillArticle_1.AboutSkillArticle, { url: githubLogo_jpg_1["default"] })))))));
};
