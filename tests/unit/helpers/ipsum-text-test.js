import { ispumText } from '../../../helpers/ispum-text';
import { module, test } from 'qunit';

module('Unit | Helper | ispum text');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = ispumText(false, {capitalize: true, range: "1-4", structure: "w"});

  assert.ok(result);
});
