"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.ScriptList = void 0;
var react_slick_1 = require("react-slick");
var react_router_dom_1 = require("react-router-dom");
var ScriptList_module_scss_1 = require("./scss/ScriptList.module.scss");
var page1_jpg_1 = require("../../assets/scenario/scenario1/page1.jpg");
var page1_jpg_2 = require("../../assets/scenario/scenario2/page1.jpg");
exports.ScriptList = function () {
    var baseURL = "../";
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        centerMode: false
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_slick_1["default"], __assign({}, settings),
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: baseURL + "detailScenario?story=1" },
                    React.createElement("img", { src: page1_jpg_1["default"], alt: "scenario1", className: ScriptList_module_scss_1["default"].scriptImg }))),
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: baseURL + "detailScenario?story=2" },
                    React.createElement("img", { src: page1_jpg_2["default"], alt: "scenario2", className: ScriptList_module_scss_1["default"].scriptImg }))))));
};
