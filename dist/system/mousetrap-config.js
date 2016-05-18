'use strict';

System.register(['mousetrap', 'aurelia-framework', 'aurelia-event-aggregator', './configure'], function (_export, _context) {
    "use strict";

    var Mousetrap, inject, EventAggregator, Configure, _typeof, _createClass, _dec, _class, MousetrapConfig;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_mousetrap) {
            Mousetrap = _mousetrap.default;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_configure) {
            Configure = _configure.Configure;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
            };

            _createClass = function () {
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

            _export('MousetrapConfig', MousetrapConfig = (_dec = inject(Configure, EventAggregator), _dec(_class = function () {
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

                                Mousetrap.bind(combo, function () {
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
            }()) || _class));

            _export('MousetrapConfig', MousetrapConfig);
        }
    };
});