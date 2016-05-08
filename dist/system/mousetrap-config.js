'use strict';

System.register(['mousetrap', 'aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
    var Mousetrap, inject, EventAggregator, _createClass, _dec, _class, MousetrapConfig;

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
        }],
        execute: function () {
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

            _export('MousetrapConfig', MousetrapConfig = (_dec = inject(EventAggregator), _dec(_class = function () {
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

                            Mousetrap.bind(combo, this.createAureliaEvent(eventName));
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
            }()) || _class));

            _export('MousetrapConfig', MousetrapConfig);
        }
    };
});