// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface KiactElementType<P = any, T = any> {
  /** type is flexible — it can be a string, function, class, or special React object.*/
  type: T;
  props: P;
  key: string | number | null;

  // A ref object or callback for referencing DOM elements or component instances.
  ref: ((instance: unknown) => void) | null | {current: unknown} | null;
  $$typeof: symbol;
}
