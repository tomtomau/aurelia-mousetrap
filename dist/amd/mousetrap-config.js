define(['exports', 'mousetrap', 'aurelia-framework', 'aurelia-event-aggregator'], function (exports, _mousetrap, _aureliaFramework, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MousetrapConfig = undefined;

    var _mousetrap2 = _interopRequireDefault(_mousetrap);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var _dec, _class;

    var MousetrapConfig = exports.MousetrapConfig = (_dec = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function MousetrapConfig(eventAggregator) {
            _classCallCheck(this, MousetrapConfig);

            this._keymap = {};

            Object.assign(this, { eventAggregator: eventAggregator });
        }

        MousetrapConfig.prototype.bindKeymap = function bindKeymap(keymap) {
            if (typeof keymap === 'undefined') {
                keymap = {};
            }

            this._keymap = keymap;

            for (var combo in keymap) {
                if (keymap.hasOwnProperty(combo)) {
                    var eventName = keymap[combo];

                    _mousetrap2.default.bind(combo, this.createAureliaEvent(eventName));
                }
            }
        };

        MousetrapConfig.prototype.createAureliaEvent = function createAureliaEvent(eventName) {
            var ea = this.eventAggregator;

            return function () {
                ea.publish(eventName);
            };
        };

        _createClass(MousetrapConfig, [{
            key: 'keymap',
            get: function get() {
                return this._keymap;
            }
        }]);

        return MousetrapConfig;
    }()) || _class);
});