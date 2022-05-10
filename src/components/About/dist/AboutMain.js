"use strict";
exports.__esModule = true;
exports.AboutMain = void 0;
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var AboutBackImage_1 = require("./AboutBackImage");
var htmlLogo_jpg_1 = require("../../assets/about/htmlLogo.jpg");
var cssLogo_jpg_1 = require("../../assets/about/cssLogo.jpg");
var jsLogo_jpg_1 = require("../../assets/about/jsLogo.jpg");
var jQueryLogo_jpg_1 = require("../../assets/about/jQueryLogo.jpg");
var sassLogo_jpg_1 = require("../../assets/about/sassLogo.jpg");
var angularLogo_jpg_1 = require("../../assets/about/angularLogo.jpg");
var reactLogo_jpg_1 = require("../../assets/about/reactLogo.jpg");
var javaLogo_jpg_1 = require("../../assets/about/javaLogo.jpg");
var springLogo_jpg_1 = require("../../assets/about/springLogo.jpg");
var phpLogo_jpg_1 = require("../../assets/about/phpLogo.jpg");
var javaEELogo_jpg_1 = require("../../assets/about/javaEELogo.jpg");
var oracleLogo_png_1 = require("../../assets/about/oracleLogo.png");
var mysqlLogo_jpg_1 = require("../../assets/about/mysqlLogo.jpg");
var redhatLogo_jpg_1 = require("../../assets/about/redhatLogo.jpg");
var vmwareLogo_jpg_1 = require("../../assets/about/vmwareLogo.jpg");
var linuxLogo_jpg_1 = require("../../assets/about/linuxLogo.jpg");
var githubLogo_jpg_1 = require("../../assets/about/githubLogo.jpg");
require("./scss/About.scss");
exports.AboutMain = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: 'workContainer w-container' },
            React.createElement("a", { href: CommonUtil_1.getUrl() },
                React.createElement(LogoInf_1.LogoInf, { type: 1 }))),
        React.createElement("section", null,
            React.createElement(AboutBackImage_1.AboutBackImage, null)),
        React.createElement("section", { className: 'w-container' },
            React.createElement("div", { className: 'skillArea' },
                React.createElement("h2", null, "Programming Skills"),
                React.createElement("h3", null, "Frontend"),
                React.createElement("div", { className: 'skill-container' },
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: htmlLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: cssLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: jsLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: jQueryLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: sassLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: angularLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: reactLogo_jpg_1["default"] })))),
                React.createElement("h3", null, "Backend"),
                React.createElement("div", { className: 'skill-container' },
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: javaLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: springLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: javaEELogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: phpLogo_jpg_1["default"] })))),
                React.createElement("h3", null, "Database"),
                React.createElement("div", { className: 'skill-container' },
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: oracleLogo_png_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: mysqlLogo_jpg_1["default"] })))),
                React.createElement("h3", null, "Infrastructure"),
                React.createElement("div", { className: 'skill-container' },
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: redhatLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: vmwareLogo_jpg_1["default"] }))),
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: linuxLogo_jpg_1["default"] })))),
                React.createElement("h3", null, "Other"),
                React.createElement("div", { className: 'skill-container' },
                    React.createElement("article", { className: 'skillPost' },
                        React.createElement("figure", null,
                            React.createElement("img", { src: githubLogo_jpg_1["default"] }))))))));
};
