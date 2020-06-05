import MainPage from './pages/index'
import AshPage from './pages/ash'

const routes = {
  '/': MainPage,
  '/ash': AshPage,
}
const rootElement = document.getElementById('root') as Element

export const render = (): void => {
  try {
    const pageComponent = routes[window.location.pathname]
    new pageComponent(rootElement)
  } catch {
    rootElement.innerHTML = '<p>404 NotFound</p>'
  }
}

export const handleRouteMove = (pathName: string): void => {
  window.history.pushState({}, pathName, window.location.origin + pathName)

  render()
}

export default () => {
  render()
  window.onpopstate = (() => {
    render()
  })
}
