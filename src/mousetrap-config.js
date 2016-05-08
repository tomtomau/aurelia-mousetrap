import Mousetrap from 'mousetrap';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

/**
 * This class binds and stores the keymap.
 */
@inject(EventAggregator)
export class MousetrapConfig {
    _keymap = {};

    constructor(eventAggregator) {
        Object.assign(this, { eventAggregator });
    }

    bindKeymap(keymap) {
        if (typeof keymap === 'undefined') {
            keymap = {};
        }

        // Store the keymap, for reference
        this._keymap = keymap;

        // Bind each shortcut
        for (let combo in keymap) {
            if (keymap.hasOwnProperty(combo)) {
                let eventName = keymap[combo];

                Mousetrap.bind(combo, this.createAureliaEvent(eventName));
            }
        }
    }

    get keymap() {
        return this._keymap;
    }

    /**
     * @param eventName
     * @returns {Function}
     */
    createAureliaEvent(eventName) {
        let ea = this.eventAggregator;

        return () => {
            ea.publish(eventName);
        }
    }
}