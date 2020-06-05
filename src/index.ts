import { Component, FunctionComponent } from './core'
import request from './lib/request'

import './styles/index.css'

const Child: FunctionComponent<{title: string}> = ({ title }) => {
  return `<span>${title}</span>`
}

interface Article {
  title: string;
}

interface State {
  count: number;
  articles: Article[];
}


class Root implements Component { // eslint-disable-line
  state: State = {
    count: 0,
    articles: []
  }
  parent: Element
  constructor(parent: Element) {
    this.parent = parent
    this.mounted()
    this.render()
  }
  setState(newState: State) {
    this.state = { ...newState }
    this.render()
  }
  async mounted () {
    const res = await request<{articles: Article[]}>('https://conduit.productionready.io/api/articles')
    this.setState({ count: 1, articles: res.data.articles })
  }
  async fetch () {
    const res = await request<{articles: Article[]}>('https://conduit.productionready.io/api/articles?tag=dev')
    this.setState({ count: 1, articles: res.data.articles })
  }
  click() {
    this.fetch()
  }
  render() {
    const view = `<p id="p">${this.state.count}${this.state.articles.map(a => Child({ title: a.title }))}</p>`
    this.parent.innerHTML = view
    const id = document.getElementById('p')
    id!.addEventListener('click', () => {
      this.click()
    })
  }
}

const r = document.getElementById('root') as Element
const root = new Root(r)
