export let Configure = class Configure {
    constructor() {
        this._config = {
            keymap: {}
        };
    }

    options(obj) {
        Object.assign(this._config, obj);
    }

    get(key) {
        return this._config[key];
    }

    set(key, val) {
        this._config[key] = val;
        return this._config[key];
    }
};