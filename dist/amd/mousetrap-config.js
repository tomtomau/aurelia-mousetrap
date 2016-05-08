define(['exports', 'mousetrap', 'aurelia-framework', 'aurelia-event-aggregator', './configure'], function (exports, _mousetrap, _aureliaFramework, _aureliaEventAggregator, _configure) {
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

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };

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

    var MousetrapConfig = exports.MousetrapConfig = (_dec = (0, _aureliaFramework.inject)(_configure.Configure, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function MousetrapConfig(configure, eventAggregator) {
            _classCallCheck(this, MousetrapConfig);

            this._keymap = {};
            this._callback = null;

            if (_typeof(configure.get('keymap')) === 'object') {
                this._keymap = configure.get('keymap');
            }

            if (typeof configure.get('callback') === 'function') {
                this._callback = configure.get('callback');
            } else {
                this._callback = function (eventName) {
                    eventAggregator.publish(eventName);
                };
            }
        }

        MousetrapConfig.prototype.bindKeymap = function bindKeymap() {
            var _this = this;

            var keymap = this._keymap;

            for (var combo in keymap) {
                if (keymap.hasOwnProperty(combo)) {
                    (function () {
                        var eventName = keymap[combo];

                        _mousetrap2.default.bind(combo, function () {
                            _this._callback(eventName);
                        });
                    })();
                }
            }
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