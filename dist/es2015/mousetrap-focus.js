import { inject, TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AbstractMousetrapAttribute } from './mousetrap-attribute';

export let MousetrapFocusCustomAttribute = class MousetrapFocusCustomAttribute extends AbstractMousetrapAttribute {
    attached() {
        if (!this.element.classList.contains('mousetrap')) {
            this.element.classList.add('mousetrap');
        }
    }

    static act(element) {
        element.focus();
    }
};