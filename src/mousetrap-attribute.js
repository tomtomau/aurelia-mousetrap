import {TaskQueue} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class AbstractMousetrapAttribute {
    _subscription = null;

    static inject = [Element, EventAggregator, TaskQueue];

    constructor(element, eventAggregator, taskQueue) {
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

    /**
     * This method needs to be implemented by subclasses
     * @param element
     */
    static act(element) {
        console.error(`act() method not implemented`);
    }
}