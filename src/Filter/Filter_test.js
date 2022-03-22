import {Filter} from './Filter.js';
import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('element-filter', () => {
  test('is defined', () => {
    const el = document.createElement('element-filter');
    assert.instanceOf(el, Filter);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<element-filter></element-filter>`);
    assert.shadowDom.equal(
      el,
      `<input type="text" placeholder="Search" value="">`
    );
  });

  test('styling applied', async () => {
    const el = await fixture(html`<element-filter></element-filter>`);
    await el.updateComplete;
    assert.equal(getComputedStyle(el).margin, '5px');
  });
});
