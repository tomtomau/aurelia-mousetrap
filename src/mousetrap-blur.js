import {inject, TaskQueue} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {AbstractMousetrapAttribute} from './mousetrap-attribute';

/**
 * Adding [mousetrap-blur="EVENT_NAME"] to an attribute allows it to blur on the Element
 * when the Mousetrap EVENT_NAME is passed through the EventAggregator
 */
export class MousetrapBlurCustomAttribute extends AbstractMousetrapAttribute {
    static act(element) {
        element.blur();
    }
}
