import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { MyCustomElement } from '../src/MyCustomElement.js';
import '../src/my-custom-element.js';

describe('MyCustomElement', () => {
  it('has an empty default header "" and counter set to 5', async () => {
    const el = await fixture<MyCustomElement>(html`<my-custom-element></my-custom-element>`);

    expect(el.header).to.equal('');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MyCustomElement>(html`<my-custom-element></my-custom-element>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<MyCustomElement>(html`<my-custom-element header="attribute header"></my-custom-element>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MyCustomElement>(html`<my-custom-element></my-custom-element>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
