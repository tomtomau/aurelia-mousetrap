var _class, _temp;

import { TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

export let AbstractMousetrapAttribute = (_temp = _class = class AbstractMousetrapAttribute {

    constructor(element, eventAggregator, taskQueue) {
        this._subscription = null;

        Object.assign(this, { element, eventAggregator, taskQueue });
    }

    valueChanged(o, n) {
        if (null !== this._subscription) {
            this._subscription.dispose();
        }

        this._subscription = this.eventAggregator.subscribe(o, () => {
            this.taskQueue.queueTask(() => {
                this.constructor.act(this.element);
            });
        });
    }

    detached() {
        if (null !== this._subscription) {
            this._subscription.dispose();
        }
    }

    static act(element) {
        console.error(`act() method not implemented`);
    }
}, _class.inject = [Element, EventAggregator, TaskQueue], _temp);