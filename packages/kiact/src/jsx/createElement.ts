import {KiactElementType} from '@types';

type K = string | number | null;
const REACT_ELEMENT_TYPE: symbol = Symbol.for('react.transitional.element');

function KiactElement(
  type: keyof JSX.IntrinsicElements,
  key: K,
  props: never,
): KiactElementType {
  const element: KiactElementType = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    ref: props.ref ?? null,
    props,
  };

  return element;
}

export function createElement(
  type: {defaultProps?: Record<string, unknown>},
  config: Record<string, unknown>,
  ...children
) {
  const props = {...config, children};
  const key = config.key ?? null;

  // apply default props to the KiactElement
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps || {};
    for (const propName in defaultProps) {
      if (props[propName] === undefined)
        props[propName] = defaultProps[propName];
    }
  }
  return KiactElement(type, key, props);
}
