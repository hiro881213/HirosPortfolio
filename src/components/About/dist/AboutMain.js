"use strict";
exports.__esModule = true;
exports.AboutMain = void 0;
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var AboutBackImage_1 = require("./AboutBackImage");
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
                React.createElement("h3", null, "Front End")))));
};
