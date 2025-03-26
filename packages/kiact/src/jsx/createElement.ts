import {KiactElementType} from '@types';

const REACT_ELEMENT_TYPE: symbol = Symbol.for('react.transitional.element');

function KiactElement<T>(
  type: T,
  key: string,
  props: {
    ref?: (() => void) | {current: unknown} | null;
    [key: string]: unknown;
  },
): KiactElementType<T, typeof props> {
  const element: KiactElementType<T, typeof props> = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref: props.ref ?? null,
    props,
  };

  return element;
}

export function createElement(
  type: string,
  config: Record<string, unknown>,
  ...children: KiactElementType[]
) {
  const props = {...config, children};
  const key = config.key ?? null;

  return KiactElement(type, key, props);
}
