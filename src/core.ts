
export interface Component {
  render(): string;
}

export interface ComponentConstructor {
  new (): Component;
}

export const render = (component: ComponentConstructor) => {
  const c = new component()
  return c.render()
}
