import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import componentStyles from './styles.css.js';

export class MyCustomElement extends LitElement {
  static styles = [componentStyles];

  @property({ type: String })
  header = '';

  @property({ type: Number })
  counter = 5;

  __increment() {
    this.counter += 1;
    this.dispatchEvent(new CustomEvent('custom-count-event', { detail: this.counter }));
  }

  render() {
    return html`<button @click=${this.__increment}>increment</button>`;
  }
}
