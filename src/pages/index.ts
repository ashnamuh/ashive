
import { Component } from '../types/core'

export default class MainPage implements Component { // eslint-disable-line
  parent: Element
  constructor(parent: Element) {
    this.parent = parent
    this.render()
  }
  render() {
    const view = '<div>Main page!</div>'
    this.parent.innerHTML = view
  }
}
