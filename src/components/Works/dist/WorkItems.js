"use strict";
exports.__esModule = true;
exports.WorkItems = void 0;
var react_anchor_link_smooth_scroll_1 = require("react-anchor-link-smooth-scroll");
var textlabelMenu_json_1 = require("../../assets/textLabels/textlabelMenu.json");
var react_intersection_observer_1 = require("react-intersection-observer");
require("animate.css");
exports.WorkItems = function (props) {
    var target = props.target;
    var title = '';
    var targetTitleKey = "graphicTitle" + target;
    for (var v in textlabelMenu_json_1["default"]) {
        var key = v;
        if (String(key) === targetTitleKey) {
            title = textlabelMenu_json_1["default"][key];
            break;
        }
    }
    var _a = react_intersection_observer_1.useInView({
        // オプション
        rootMargin: '-50px',
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    return (React.createElement(React.Fragment, null,
        React.createElement("article", { ref: ref, className: 'graphic' }, inView && (React.createElement("div", { className: "animate__animated animate__rotateInDownLeft" },
            React.createElement(react_anchor_link_smooth_scroll_1["default"], { href: "#work" + target },
                React.createElement("figure", null,
                    React.createElement("img", { src: props.pictUrl, alt: 'image' }),
                    React.createElement("span", null,
                        React.createElement("h2", null, title)))))))));
};
