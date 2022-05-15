"use strict";
exports.__esModule = true;
exports.AboutSkillArticle = void 0;
var react_intersection_observer_1 = require("react-intersection-observer");
require("animate.css");
exports.AboutSkillArticle = function (props) {
    var _a = react_intersection_observer_1.useInView({
        // オプション
        rootMargin: '-50px',
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    return (React.createElement(React.Fragment, null,
        React.createElement("article", { ref: ref, className: 'skillPost' }, inView && (React.createElement("figure", { className: "animate__animated animate__rotateInDownLeft" },
            React.createElement("img", { src: props.url }))))));
};
