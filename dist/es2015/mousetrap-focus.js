import { inject, TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AbstractMousetrapAttribute } from './mousetrap-attribute';

export let MousetrapFocusCustomAttribute = class MousetrapFocusCustomAttribute extends AbstractMousetrapAttribute {
    static act(element) {
        element.focus();
    }
};