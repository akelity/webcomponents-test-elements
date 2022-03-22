import {Detail} from './Detail.js';
import {assert} from '@open-wc/testing';

suite('element-detail', () => {
  test('is defined', () => {
    const el = document.createElement('element-detail');
    assert.instanceOf(el, Detail);
  });

});
