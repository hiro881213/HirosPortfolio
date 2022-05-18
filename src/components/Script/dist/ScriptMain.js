"use strict";
exports.__esModule = true;
exports.ScriptMain = void 0;
var react_responsive_1 = require("react-responsive");
var react_router_dom_1 = require("react-router-dom");
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var ScriptList_1 = require("./ScriptList");
var page1_jpg_1 = require("../../assets/scenario/scenario1/page1.jpg");
var page1_jpg_2 = require("../../assets/scenario/scenario2/page1.jpg");
var page1_jpg_3 = require("../../assets/scenario/scenario3/page1.jpg");
var ScriptMain_module_scss_1 = require("./scss/ScriptMain.module.scss");
exports.ScriptMain = function () {
    var baseURL = "../";
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: 'w-container' },
            React.createElement("a", { href: CommonUtil_1.getUrl() },
                React.createElement(LogoInf_1.LogoInf, { type: 1 }))),
        React.createElement(react_responsive_1["default"], { query: '(min-width: 768px)' },
            React.createElement("main", { className: ScriptMain_module_scss_1["default"].mainClass },
                React.createElement("label", null, "\u811A\u672C\u4F5C\u54C1\u96C6"),
                React.createElement("div", { className: ScriptMain_module_scss_1["default"].listScripts },
                    React.createElement(ScriptList_1.ScriptList, null)))),
        React.createElement(react_responsive_1["default"], { query: '(max-width: 767px)' },
            React.createElement("div", { className: ScriptMain_module_scss_1["default"].mainClass },
                React.createElement("label", null, "\u811A\u672C\u4F5C\u54C1\u96C6"),
                React.createElement("div", { style: { padding: "150px 0" } },
                    React.createElement(react_router_dom_1.Link, { to: baseURL + "detailScenario?story=1" },
                        React.createElement("img", { src: page1_jpg_1["default"], alt: "scenario1", className: ScriptMain_module_scss_1["default"].scriptImg }))),
                "zzz",
                React.createElement("div", null,
                    React.createElement(react_router_dom_1.Link, { to: baseURL + "detailScenario?story=2" },
                        React.createElement("img", { src: page1_jpg_2["default"], alt: "scenario2", className: ScriptMain_module_scss_1["default"].scriptImg }))),
                React.createElement("div", null,
                    React.createElement(react_router_dom_1.Link, { to: baseURL + "detailScenario?story=3" },
                        React.createElement("img", { src: page1_jpg_3["default"], alt: "scenario3", className: ScriptMain_module_scss_1["default"].scriptImg })))))));
};
