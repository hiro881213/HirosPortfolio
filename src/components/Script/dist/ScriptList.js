"use strict";
exports.__esModule = true;
exports.ScriptList = void 0;
var react_multi_carousel_1 = require("react-multi-carousel");
require("react-multi-carousel/lib/styles.css");
var react_router_dom_1 = require("react-router-dom");
var ScriptList_module_scss_1 = require("./scss/ScriptList.module.scss");
var page1_jpg_1 = require("../../assets/scenario/scenario1/page1.jpg");
var page1_jpg_2 = require("../../assets/scenario/scenario2/page1.jpg");
exports.ScriptList = function () {
    var baseURL = "../";
    var responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(react_multi_carousel_1["default"], { responsive: responsive },
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: baseURL + "detailScenario?story=1" },
                    React.createElement("img", { src: page1_jpg_1["default"], alt: "scenario1", className: ScriptList_module_scss_1["default"].scriptImg }))),
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: baseURL + "detailScenario?story=2" },
                    React.createElement("img", { src: page1_jpg_2["default"], alt: "scenario2", className: ScriptList_module_scss_1["default"].scriptImg }))))));
};
