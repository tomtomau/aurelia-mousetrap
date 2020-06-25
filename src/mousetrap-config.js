import Mousetrap from 'mousetrap';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Configure} from './configure';

/**
 * This class binds and stores the keymap, where the keymap and callback are configurable.
 * The default implementation for the callback is to publish an event with the same name to
 * the EventAggregator
 */
@inject(Configure, EventAggregator)
export class MousetrapConfig {
    _keymap = {};
    _callback = null;

    constructor(configure, eventAggregator) {
        // Load the keymap info from the config
        if (typeof configure.get('keymap') === 'object') {
            this._keymap = configure.get('keymap');
        }

        // If a callback has been bound in the config
        if (typeof configure.get('callback') === 'function') {
            // Use that callback
            this._callback = configure.get('callback');
        } else {
            // Otherwise, use a basic implementation of eventAggregator
            this._callback = (eventName) => {
                eventAggregator.publish(eventName);
            }
        }
    }

    /**
     * This method actually binds the config with the mousetrap.js library
     */
    bindKeymap() {
        let keymap = this._keymap;

        // Bind each shortcut
        for (let combo in keymap) {
            if (keymap.hasOwnProperty(combo)) {
                let eventName = keymap[combo];

                Mousetrap.bind(combo, ($event) => {
                    this._callback(eventName, $event);
                });
            }
        }
    }

    /**
     * Allow access to the keymap, externally - maybe someone will want it
     * @returns {{}}
     */
    get keymap() {
        return this._keymap;
    }
}
