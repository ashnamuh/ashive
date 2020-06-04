export const render = (elementId: string, component: Component) => {
  const element = document.getElementById(elementId)

  if (!element) {
    throw new Error('NotFound element with given id')
  }
  element.innerHTML = component()
}