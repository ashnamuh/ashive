
export interface Component {
  parent: Element
  render(): void;
}

export interface FunctionComponent<P = {}> {
  (props: P): string | null;
}

export interface ComponentConstructor {
  new (): Component;
}
