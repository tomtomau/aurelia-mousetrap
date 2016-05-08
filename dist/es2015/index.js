import { Configure } from './configure';
import { MousetrapConfig } from './mousetrap-config';

export function configure(aurelia, configCallback) {
  let instance = aurelia.container.get(Configure);

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(instance);
  }

  let mousetrapConfig = aurelia.container.get(MousetrapConfig);
  mousetrapConfig.bindKeymap();

  aurelia.globalResources(['./mousetrap-click', './mousetrap-focus', './mousetrap-blur']);
}