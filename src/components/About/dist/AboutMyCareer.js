"use strict";
exports.__esModule = true;
exports.AboutMyCareer = void 0;
var myCareerLabel_json_1 = require("../../assets/textLabels/myCareerLabel.json");
exports.AboutMyCareer = function (props) {
    var id = props.id;
    var sysName = "";
    var title = "";
    var first = "";
    var second = "";
    var third = "";
    var fourth = "";
    var five = "";
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
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'wrap' },
            React.createElement("div", { className: 'title' },
                React.createElement("h3", null, sysName)),
            React.createElement("div", null,
                React.createElement("p", null, title),
                React.createElement("p", null, first),
                React.createElement("p", null, second),
                React.createElement("br", null),
                React.createElement("p", null, third),
                React.createElement("p", null, fourth),
                React.createElement("p", null, five)))));
};
