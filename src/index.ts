import { Component, render } from './core'
import request from './lib/request'

import './styles/index.css'

class Child implements Component {
  constructor() {
    console.log(11)
  }
  render() {
    console.log('child render')
    return '<span>hello</span>'
  }
}

interface State {
  count: number;
}

class Root implements Component { // eslint-disable-line
  state: State = {
    count: 0
  }
  constructor() {
    this.mounted()
  }
  setState(newState: State) {
    this.state = { ...newState }
  }
  async mounted () {
    const res = await fetch('https://conduit.productionready.io/api/articles')
    console.log(res)
  }
  click() {
    console.log('clicked')
  }

  render() {
    return `<p onClick="this.click()">${this.state.count}${render(Child)}</p>`
  }
}

(async () => {
  console.log(1)
  const r = await request('https://conduit.productionready.io/api/articles')
  console.log(2)
  console.log(r)
})()
