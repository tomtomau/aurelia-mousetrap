import {inject, TaskQueue} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {AbstractMousetrapAttribute} from './mousetrap-attribute';

/**
 * Adding [mousetrap-focus="EVENT_NAME"] to an attribute allows it to focus on the Element
 * when the Mousetrap EVENT_NAME is passed through the EventAggregator
 */
export class MousetrapFocusCustomAttribute extends AbstractMousetrapAttribute {
    static act(element) {
        element.focus();
    }
}
