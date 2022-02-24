import { Component, h } from '@stencil/core';

@Component({
  tag: 'calculator-button',
  styleUrl: "calculator-button.css"
})

export class Mycomponent {
  render() {
    return <div class="number-button">
      <button name="number" class="number-button__key number" value="7">7</button>
      <button name="number" class="number-button__key number" value="8">8</button>
      <button name="number" class="number-button__key number" value="9">9</button>
      <div class="number-button__box">
        <button name="resetAC" class="number-button__key reset" value="AC">AC</button>
        <button name="reset" class="number-button__key reset" value="C">C</button>
      </div>
      <button name="number" class="number-button__key number" value="4">4</button>
      <button name="number" class="number-button__key number" value="5">5</button>
      <button name="number" class="number-button__key number" value="6">6</button>
      <button name="operator" class="number-button__key operator" value="+">+</button>
      <button name="number" class="number-button__key number" value="1">1</button>
      <button name="number" class="number-button__key number" value="2">2</button>
      <button name="number" class="number-button__key number" value="3">3</button>
      <button name="operator" class="number-button__key operator less" value="-">-</button>
      <button name="number" class="number-button__key number" value="0">0</button>
      <button name="result" class="number-button__key operator" value="=">=</button>
      <button name="operator" class="number-button__key operator" value="*">x</button>
      <button name="operator" class="number-button__key operator" value="/">/</button>
    </div>
  }
}
