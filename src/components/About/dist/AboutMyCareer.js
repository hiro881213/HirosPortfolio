"use strict";
exports.__esModule = true;
exports.AboutMyCareer = void 0;
var react_intersection_observer_1 = require("react-intersection-observer");
require("animate.css");
var myCareerLabel_json_1 = require("../../assets/textLabels/myCareerLabel.json");
exports.AboutMyCareer = function (props) {
    // -------------------------------------------
    // ラベル設定処理
    // -------------------------------------------
    var id = props.id;
    // 表示ラベル変数群
    var sysName = "";
    var title = "";
    var first = "";
    var second = "";
    var third = "";
    var fourth = "";
    var five = "";
    // キー一覧
    var sysNameKey = "sysName" + id;
    var titleKey = "title" + id;
    var firstKey = "first" + id;
    var secondKey = "second" + id;
    var thirdKey = "third" + id;
    var fourthKey = "fourth" + id;
    var fiveKey = "fives" + id;
    for (var v in myCareerLabel_json_1["default"]) {
        var key = v;
        if (String(key) === sysNameKey) {
            sysName = myCareerLabel_json_1["default"][key];
        }
        if (String(key) === titleKey) {
            title = myCareerLabel_json_1["default"][key];
        }
        if (String(key) === firstKey) {
            first = myCareerLabel_json_1["default"][key];
        }
        if (String(key) === secondKey) {
            second = myCareerLabel_json_1["default"][key];
        }
        if (String(key) === thirdKey) {
            third = myCareerLabel_json_1["default"][key];
        }
        if (String(key) === fourthKey) {
            fourth = myCareerLabel_json_1["default"][key];
        }
        if (String(key) === fiveKey) {
            five = myCareerLabel_json_1["default"][key];
        }
    }
    var _a = react_intersection_observer_1.useInView({
        // オプション
        rootMargin: '-50px',
        triggerOnce: true
    }), ref = _a.ref, inView = _a.inView;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: ref, className: 'wrap' }, inView && (React.createElement("div", { className: "animate__animated animate__lightSpeedInLeft" },
            React.createElement("div", { className: 'title' },
                React.createElement("h3", null, sysName)),
            React.createElement("div", null,
                React.createElement("p", null, title),
                React.createElement("p", null, first),
                React.createElement("p", null, second),
                React.createElement("br", null),
                React.createElement("p", null, third),
                React.createElement("p", null, fourth),
                React.createElement("p", null, five)))))));
};
