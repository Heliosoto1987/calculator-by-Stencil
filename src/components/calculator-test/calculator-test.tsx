import { Component, h, State, Listen } from '@stencil/core';
let array: any = []

@Component({
  tag: 'calculator-box',
  styleUrl: "calculator-test.css"
})

export class Mycomponent {
  @State() show: any = "0"
  @State() save: any;
  @State() saveOperator: any = ""
  @State() saveNumber: number = 0
  @State() saveDisplay: number = 0
  @State() acc: string = ""
  @Listen('click', { capture: true })
  handleClick(ev) {
    this.acc += ev.target.value

    if (ev.target.name === "number") {
      if (this.show === "0") {
        this.show = ""
      } else if (this.show === "*" || this.show === "-" || this.show === "/" || this.show === "+") {
        this.show = ""
      }
      this.show += ev.target.value.toString()
    }
    if (ev.target.name === "operator") {
      this.save = this.show
      this.show = ev.target.value
      this.saveOperator = ev.target.value
    }

    if (ev.target.name === "result") {
      if (this.show === "+" || this.show === "-" || this.show === "*" || (this.show === "/")) {
        this.show = this.saveNumber
      }
      this.saveDisplay = parseFloat(this.show)
      this.show = ""
      this.saveNumber = parseFloat(this.save)
      this.calculate(this.saveNumber, this.saveDisplay)
      this.save = 0
      array.push(this.show)

    }
    if (ev.target.name === "reset") {
      this.show = "0"
      this.saveNumber = 0
      this.saveDisplay = 0
      array = []
    }

    if (ev.target.value === "AC") {
      array = []
    }

  }
  calculate = (value1: number, value2: number) => {
    switch (this.saveOperator) {
      case "+":
        return this.show = value1 + value2

      case "-":
        return this.show = value1 - value2

      case "*":
        return this.show = value1 * value2

      case "/":
        return this.show = value1 / value2

      case "":
        return this.show = "0"

      default:
        return
    }
  }

  render() {
    return <div class="calculator">
      <div class="calculator__container">
        <div class="calculator__register">Register: {array.map(value => <span class="register__data">{value}</span>)}</div>
        <div class="calculator__screen">{this.show}</div>
        <calculator-button></calculator-button>
      </div>
    </div>
  }
}
