var _dec, _class;

import Mousetrap from 'mousetrap';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

export let MousetrapConfig = (_dec = inject(EventAggregator), _dec(_class = class MousetrapConfig {

    constructor(eventAggregator) {
        this._keymap = {};

        Object.assign(this, { eventAggregator });
    }

    bindKeymap(keymap) {
        if (typeof keymap === 'undefined') {
            keymap = {};
        }

        this._keymap = keymap;

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

    createAureliaEvent(eventName) {
        let ea = this.eventAggregator;

        return () => {
            ea.publish(eventName);
        };
    }
}) || _class);