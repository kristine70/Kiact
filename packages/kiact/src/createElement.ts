import {KiactElementType} from '@types';
type k = string | number | null;
const REACT_ELEMENT_TYPE: symbol = Symbol.for('react.transitional.element');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function KiactElement(type: any, key: k, props: any): KiactElementType {
  const element: KiactElementType = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref: props.ref || null,
    props,
  };

  return element;
}

export function createElement(type, config, ...children) {
  const props = {...config, children};
  const key = config.key === null ? null : String(config.key);

  // apply default props to the KiactElement
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (const propName in defaultProps) {
      if (props[propName] === undefined)
        props[propName] = defaultProps[propName];
    }
  }
  return KiactElement(type, key, props);
}
