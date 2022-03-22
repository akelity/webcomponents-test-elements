import {Table} from './Table.js';
import {assert} from '@open-wc/testing';

suite('element-filter', () => {
  test('is defined', () => {
    const el = document.createElement('element-table');
    assert.instanceOf(el, Table);
  });

});
