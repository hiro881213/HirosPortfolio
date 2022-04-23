"use strict";
exports.__esModule = true;
exports.AboutMain = void 0;
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var editMovie_jpg_1 = require("../../assets/about/editMovie.jpg");
var programming_jpg_1 = require("../../assets/about/programming.jpg");
var recording_jpg_1 = require("../../assets/about/recording.jpg");
var settingAudio_jpg_1 = require("../../assets/about/settingAudio.jpg");
require("./scss/About.scss");
exports.AboutMain = function () {
    var src1 = {
        backgroundImage: "url(" + editMovie_jpg_1["default"] + ")"
    };
    var src2 = {
        backgroundImage: "url(" + programming_jpg_1["default"] + ")",
        animationDelay: '4s'
    };
    var src3 = {
        backgroundImage: "url(" + recording_jpg_1["default"] + ")",
        animationDelay: '8s'
    };
    var src4 = {
        backgroundImage: "url(" + settingAudio_jpg_1["default"] + ")",
        animationDelay: '12s'
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: 'workContainer w-container' },
            React.createElement("a", { href: CommonUtil_1.getUrl() },
                React.createElement(LogoInf_1.LogoInf, { type: 1 }))),
        React.createElement("section", { className: 'allAbout' },
            React.createElement("div", { style: src1, className: 'bgImg' },
                React.createElement("h1", null,
                    "HIRO'S",
                    React.createElement("br", null),
                    "VISION",
                    React.createElement("br", null),
                    "SKILLS")),
            React.createElement("div", { style: src2, className: 'bgImg' },
                React.createElement("h1", null,
                    "HIRO'S",
                    React.createElement("br", null),
                    "VISION",
                    React.createElement("br", null),
                    "SKILLS")),
            React.createElement("div", { style: src3, className: 'bgImg' },
                React.createElement("h1", null,
                    "HIRO'S",
                    React.createElement("br", null),
                    "VISION",
                    React.createElement("br", null),
                    "SKILLS")),
            React.createElement("div", { style: src4, className: 'bgImg' },
                React.createElement("h1", null,
                    "HIRO'S",
                    React.createElement("br", null),
                    "VISION",
                    React.createElement("br", null),
                    "SKILLS")))));
};
