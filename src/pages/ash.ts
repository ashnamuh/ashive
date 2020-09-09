
import { Component } from '../types/core'

export default class AshPage implements Component { // eslint-disable-line
  parent: Element
  constructor(parent: Element) {
    this.parent = parent
    this.render()
  }
  render() {
    const view = '<div>Ash page!</div>'
    this.parent.innerHTML = view
  }
}
