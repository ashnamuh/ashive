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

export const getQueryString = (search: string): any => {
  return search
    ? (/^[?#]/.test(search) ? search.slice(1) : search)
      .split('&')
      .reduce((params, param) => {
        const [key, value] = param.split('=')
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
        return params
      }, {}
      )
    : {}
}

export const parseQueryString = (params: object): string => {
  return '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&')
}
