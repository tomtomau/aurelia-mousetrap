'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MousetrapClickCustomAttribute = undefined;

var _aureliaFramework = require('aurelia-framework');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _mousetrapAttribute = require('./mousetrap-attribute');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MousetrapClickCustomAttribute = exports.MousetrapClickCustomAttribute = function (_AbstractMousetrapAtt) {
    _inherits(MousetrapClickCustomAttribute, _AbstractMousetrapAtt);

    function MousetrapClickCustomAttribute() {
        _classCallCheck(this, MousetrapClickCustomAttribute);

        return _possibleConstructorReturn(this, _AbstractMousetrapAtt.apply(this, arguments));
    }

    MousetrapClickCustomAttribute.act = function act(element) {
        element.click();
    };

    return MousetrapClickCustomAttribute;
}(_mousetrapAttribute.AbstractMousetrapAttribute);