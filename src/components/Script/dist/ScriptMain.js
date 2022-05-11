"use strict";
exports.__esModule = true;
exports.ScriptMain = void 0;
var CommonUtil_1 = require("../../CommonUtil");
var LogoInf_1 = require("../Common/LogoInf");
var ScriptList_1 = require("./ScriptList");
var ScriptMain_module_scss_1 = require("./scss/ScriptMain.module.scss");
exports.ScriptMain = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: 'w-container' },
            React.createElement("a", { href: CommonUtil_1.getUrl() },
                React.createElement(LogoInf_1.LogoInf, { type: 1 }))),
        React.createElement("main", { className: ScriptMain_module_scss_1["default"].mainClass },
            React.createElement("label", null, "\u811A\u672C\u4F5C\u54C1\u96C6"),
            React.createElement("div", { className: ScriptMain_module_scss_1["default"].listScripts },
                React.createElement(ScriptList_1.ScriptList, null)))));
};
