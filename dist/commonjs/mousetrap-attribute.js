'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AbstractMousetrapAttribute = undefined;

var _class, _temp;

var _aureliaFramework = require('aurelia-framework');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AbstractMousetrapAttribute = exports.AbstractMousetrapAttribute = (_temp = _class = function () {
    function AbstractMousetrapAttribute(element, eventAggregator, taskQueue) {
        _classCallCheck(this, AbstractMousetrapAttribute);

        this._subscription = null;

        Object.assign(this, { element: element, eventAggregator: eventAggregator, taskQueue: taskQueue });
    }

    AbstractMousetrapAttribute.prototype.valueChanged = function valueChanged(o, n) {
        var _this = this;

        if (null !== this._subscription) {
            this._subscription.dispose();
        }

        this._subscription = this.eventAggregator.subscribe(o, function () {
            _this.taskQueue.queueTask(function () {
                _this.constructor.act(_this.element);
            });
        });
    };

    AbstractMousetrapAttribute.prototype.detached = function detached() {
        if (null !== this._subscription) {
            this._subscription.dispose();
        }
    };

    AbstractMousetrapAttribute.act = function act(element) {
        console.error('act() method not implemented');
    };

    return AbstractMousetrapAttribute;
}(), _class.inject = [Element, _aureliaEventAggregator.EventAggregator, _aureliaFramework.TaskQueue], _temp);