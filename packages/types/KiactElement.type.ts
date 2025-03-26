export interface KiactElementType<T, P> {
  /** type is flexible — it can be a string, function, class, or special React object.*/
  type: T;
  props: P;
  key: string | number | null;

  /** A ref object or callback for referencing DOM elements or component instances.*/
  ref: (() => void) | null | {current: unknown};
  $$typeof: symbol;
}
