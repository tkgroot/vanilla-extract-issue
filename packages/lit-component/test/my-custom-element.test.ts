import { expect, fixture } from '@open-wc/testing';
import { html } from 'lit';
import { MyCustomElement } from '../src/MyCustomElement.js';
import '../src/my-custom-element.js';

describe('MyCustomElement', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<MyCustomElement>(html`<lit-element></lit-element>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MyCustomElement>(html`<lit-element></lit-element>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<MyCustomElement>(html`<lit-element header="attribute header"></lit-element>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MyCustomElement>(html`<lit-element></lit-element>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
