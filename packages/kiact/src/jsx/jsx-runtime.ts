import {createElement} from './createElement';

export function jsxs(
  type: Record<string, unknown>,
  config: Record<string, unknown>,
  ...children: unknown[]
) {
  return createElement(type, config, ...children);
}
