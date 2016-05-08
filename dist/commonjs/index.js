'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _configure = require('./configure');

var _mousetrapConfig = require('./mousetrap-config');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_configure.Configure);

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(instance);
  }

  var mousetrapConfig = aurelia.container.get(_mousetrapConfig.MousetrapConfig);
  mousetrapConfig.bindKeymap();

  aurelia.globalResources(['./mousetrap-click', './mousetrap-focus', './mousetrap-blur']);
}