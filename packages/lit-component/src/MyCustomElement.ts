import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class MyCustomElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lit-element-text-color, #1a1a1a);
    }

    :host button {
      color: #fff;
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }

    :host button:hover {
      border-color: #646cff;
    }

    :host button:focus,
    :host button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      :host button {
        color: #213547;
        background-color: #f9f9f9;
      }
    }
  `;

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
