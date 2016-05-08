'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
    var TaskQueue, EventAggregator, _class, _temp, AbstractMousetrapAttribute;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            TaskQueue = _aureliaFramework.TaskQueue;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            _export('AbstractMousetrapAttribute', AbstractMousetrapAttribute = (_temp = _class = function () {
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
            }(), _class.inject = [Element, EventAggregator, TaskQueue], _temp));

            _export('AbstractMousetrapAttribute', AbstractMousetrapAttribute);
        }
    };
});