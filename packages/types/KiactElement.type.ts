export type JSXElementConstructor<P> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | ((props: P) => KiactElementType<any, any> | null)
  | (new (props: P) => Component<P>);

export interface KiactElementType<
  P = Record<string, unknown>,
  T extends string | JSXElementConstructor<unknown> = string,
> {
  /** type is flexible — it can be a string, function, class, or special React object.*/
  type: T;
  props: P;
  key: string | number | null;

  /** A ref object or callback for referencing DOM elements or component instances.*/
  ref: (() => void) | null | {current: unknown};
  $$typeof: symbol;
}
