"use strict";
exports.__esModule = true;
exports.WorkDetail = void 0;
var textlabelMenu_json_1 = require("../../assets/textLabels/textlabelMenu.json");
var react_intersection_observer_1 = require("react-intersection-observer");
require("animate.css");
exports.WorkDetail = function (props) {
    var _a = react_intersection_observer_1.useInView({
        // オプション
        rootMargin: '0px',
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    var target = props.children;
    var title = '';
    var message = '';
    var makeMessage = '';
    var targetTitleKey = "graphicTitle" + target;
    var targetMessageKey = "graphicMessage" + target;
    var targetMakeMessageKey = "makeessage" + target;
    for (var v in textlabelMenu_json_1["default"]) {
        var key = v;
        if (String(key) === targetTitleKey) {
            title = textlabelMenu_json_1["default"][key];
        }
        if (String(key) === targetMessageKey) {
            message = textlabelMenu_json_1["default"][key];
        }
        if (String(key) === targetMakeMessageKey) {
            makeMessage = textlabelMenu_json_1["default"][key];
        }
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("article", { ref: ref, id: "work" + target, className: 'w-container' }, inView && (React.createElement("div", { className: "animate__animated animate__zoomIn" },
            React.createElement("div", { className: 'titleDiv' },
                React.createElement("span", null, title)),
            React.createElement("div", { className: 'memoDiv' },
                "Maked By ",
                React.createElement("span", { style: { fontWeight: "bold" } }, makeMessage)),
            React.createElement("figure", null,
                React.createElement("img", { src: props.pictUrl, alt: props.pictUrl })),
            React.createElement("div", { className: 'memoDiv' },
                React.createElement("span", null, message)))))));
};
