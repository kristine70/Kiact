export interface KiactElement {
  type: string;
  props: {
    children: KiactElement[];
  };
  key: string | number | null;
  ref: HTMLElement | null;
  $$typeof: symbol;
}
