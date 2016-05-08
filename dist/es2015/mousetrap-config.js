var _dec, _class;

import Mousetrap from 'mousetrap';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Configure } from './configure';

export let MousetrapConfig = (_dec = inject(Configure, EventAggregator), _dec(_class = class MousetrapConfig {

    constructor(configure, eventAggregator) {
        this._keymap = {};
        this._callback = null;

        if (typeof configure.get('keymap') === 'object') {
            this._keymap = configure.get('keymap');
        }

        if (typeof configure.get('callback') === 'function') {
            this._callback = configure.get('callback');
        } else {
            this._callback = eventName => {
                eventAggregator.publish(eventName);
            };
        }
    }

    bindKeymap() {
        let keymap = this._keymap;

        for (let combo in keymap) {
            if (keymap.hasOwnProperty(combo)) {
                let eventName = keymap[combo];

                Mousetrap.bind(combo, () => {
                    this._callback(eventName);
                });
            }
        }
    }

    get keymap() {
        return this._keymap;
    }
}) || _class);