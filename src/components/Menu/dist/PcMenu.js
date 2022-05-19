"use strict";
exports.__esModule = true;
exports.PcMenu = void 0;
var react_1 = require("react");
var PcProfile_1 = require("./PcProfile");
var TitleItem_1 = require("./TitleItem");
var MenuItem_1 = require("./MenuItem");
var ProgramImage_jpg_1 = require("../../assets/img/ProgramImage.jpg");
var ScriptImage_jpg_1 = require("../../assets/img/ScriptImage.jpg");
var GraphicImage_jpg_1 = require("../../assets/img/GraphicImage.jpg");
exports.PcMenu = function () {
    var baseURL = "./";
    var screenRef = react_1.useRef(null);
    var winWidth = 570;
    react_1.useEffect(function () {
        screenRef.current.onwheel = function (ev) {
            ev.preventDefault();
            var delta = (ev.deltaY / Math.abs(ev.deltaY)) * winWidth;
            if (delta > 0) {
                delta += screenRef.current.scrollLeft;
                delta = Math.floor(delta / winWidth) * winWidth;
            }
            else {
                delta += screenRef.current.scrollLeft;
                delta = Math.ceil(delta / winWidth) * winWidth;
            }
            screenRef.current.scrollLeft = delta;
        };
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { ref: screenRef, className: 'posts-container' },
            react_1["default"].createElement("article", { className: 'post' },
                react_1["default"].createElement("h2", null, "Road Of Contents Creator"),
                react_1["default"].createElement(PcProfile_1.PcProfile, null)),
            react_1["default"].createElement("article", null,
                react_1["default"].createElement(TitleItem_1.TitleItem, null)),
            react_1["default"].createElement(MenuItem_1.MenuItem, { src: ProgramImage_jpg_1["default"], url: baseURL + "about" }, "About"),
            react_1["default"].createElement(MenuItem_1.MenuItem, { src: GraphicImage_jpg_1["default"], url: baseURL + "work" }, "graphic"),
            react_1["default"].createElement(MenuItem_1.MenuItem, { src: ScriptImage_jpg_1["default"], url: baseURL + "script" }, "Scenario"))));
};
