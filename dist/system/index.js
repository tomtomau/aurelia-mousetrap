'use strict';

System.register(['./configure', './mousetrap-config'], function (_export, _context) {
  var Configure, MousetrapConfig;
  return {
    setters: [function (_configure) {
      Configure = _configure.Configure;
    }, function (_mousetrapConfig) {
      MousetrapConfig = _mousetrapConfig.MousetrapConfig;
    }],
    execute: function () {
      function configure(aurelia, configCallback) {
        var instance = aurelia.container.get(Configure);

        if (configCallback !== undefined && typeof configCallback === 'function') {
          configCallback(instance);
        }

        var mousetrapConfig = aurelia.container.get(MousetrapConfig);

        mousetrapConfig.bindKeymap(instance.get('keymap'));

        aurelia.globalResources(['./mousetrap-click', './mousetrap-focus', './mousetrap-blur']);
      }

      _export('configure', configure);
    }
  };
});