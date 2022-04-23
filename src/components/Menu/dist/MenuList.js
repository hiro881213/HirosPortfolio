"use strict";
exports.__esModule = true;
exports.MenuList = void 0;
var react_responsive_1 = require("react-responsive");
require("./scss/MenuList.scss");
var MenuItem_1 = require("./MenuItem");
var SmartProfile_1 = require("./SmartProfile");
var PcProfile_1 = require("./PcProfile");
var TitleItem_1 = require("./TitleItem");
var ProgramImage_jpg_1 = require("../../assets/img/ProgramImage.jpg");
var ScriptImage_jpg_1 = require("../../assets/img/ScriptImage.jpg");
var GraphicImage_jpg_1 = require("../../assets/img/GraphicImage.jpg");
exports.MenuList = function () {
    var baseURL = "./";
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'posts-container' },
            React.createElement("article", { className: 'post' },
                React.createElement("h2", null, "Road Of Contents Creator"),
                React.createElement(react_responsive_1["default"], { query: '(max-width: 767px)' },
                    React.createElement(SmartProfile_1.SmartProfile, null)),
                React.createElement(react_responsive_1["default"], { query: '(min-width: 768px)' },
                    React.createElement(PcProfile_1.PcProfile, null))),
            React.createElement(react_responsive_1["default"], { query: '(min-width: 768px)' },
                React.createElement("article", null,
                    React.createElement(TitleItem_1.TitleItem, null))),
            React.createElement(MenuItem_1.MenuItem, { src: ProgramImage_jpg_1["default"], url: baseURL + "about" }, "About"),
            React.createElement(MenuItem_1.MenuItem, { src: GraphicImage_jpg_1["default"], url: baseURL + "work" }, "graphic"),
            React.createElement(MenuItem_1.MenuItem, { src: ScriptImage_jpg_1["default"], url: baseURL + "script" }, "Scenalio"))));
};
