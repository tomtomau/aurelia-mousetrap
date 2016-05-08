"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Configure = exports.Configure = function () {
    function Configure() {
        _classCallCheck(this, Configure);

        this._config = {
            keymap: {}
        };
    }

    Configure.prototype.options = function options(obj) {
        Object.assign(this._config, obj);
    };

    Configure.prototype.get = function get(key) {
        return this._config[key];
    };

    Configure.prototype.set = function set(key, val) {
        this._config[key] = val;
        return this._config[key];
    };

    return Configure;
}();