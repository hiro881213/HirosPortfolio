"use strict";
exports.__esModule = true;
exports.App = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./App.scss");
var AboutMain_1 = require("./components/About/AboutMain");
var BaseApp_1 = require("./components/BaseArea/BaseApp");
var WorkMain_1 = require("./components/Works/WorkMain");
var ScriptMain_1 = require("./components/Script/ScriptMain");
var ReadScenarioMain_1 = require("./components/ReadScenario/ReadScenarioMain");
exports.App = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: '/', element: react_1["default"].createElement(BaseApp_1.BaseApp, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: 'about', element: react_1["default"].createElement(AboutMain_1.AboutMain, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: 'work', element: react_1["default"].createElement(WorkMain_1.WorkMain, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: 'script', element: react_1["default"].createElement(ScriptMain_1.ScriptMain, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: 'detailScenario', element: react_1["default"].createElement(ReadScenarioMain_1.ReadScenarioMain, null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "*", element: react_1["default"].createElement(NotFoundPage, null) }))));
};
var NotFoundPage = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("p", null, "Not Found")));
};
exports["default"] = exports.App;
