import {createElement} from './createElement';

export function jsxs(type, config, ...maybeKey) {
  return createElement(type, config, ...maybeKey);
}
