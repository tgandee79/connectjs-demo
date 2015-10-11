import { ipsumText } from '../../../helpers/ipsum-text';
import { module, test } from 'qunit';

module('Unit | Helper | ipsum text');

test('Ipsum returns a capitalized word', function(assert) {
  var result = ipsumText([], {capitalize: true, count: "1", structure: "w"});
  // result should have a sentence, first work capitalize, with a period after more than 1 word.
  var isFirstLetterUppercase = /^[A-Z]/.test(result);
  assert.ok(isFirstLetterUppercase);
});
test('Ipsum returns a sentance', function(assert) {
  var result = ipsumText(false, {capitalize: true, count: "1", structure: "s"});
  // result should have a sentence, first work capitalize, with a period after more than 1 word.
  var isFirstLetterUppercase = /^[A-Z]/.test(result);
  assert.ok(isFirstLetterUppercase);
  var isLastCharPeriod = /.$/.test(result);
  assert.ok(isLastCharPeriod);
  // split by spaces
  var testResultArray = result.split(' ');
  assert.ok(testResultArray.length > 3);
});
test('Ipsum returns a range of sentences', function(assert) {
  var result = ipsumText(false, {capitalize: true, range: "1-3", structure: "s"});
  // result should have set of 1 to 3 sentences.
  var testResultArray = result.split('.');
  assert.ok(1 < testResultArray  < 4);
});
test('Ipsum returns one or many words', function(assert) {
  var singleWord = ipsumText(false, {capitalize: true, count: "1", structure: "w"});
  var multipleWords = ipsumText(false, {capitalize: true, count: "5", structure: "w"});
  // result should have a sentence, first work capitalize, with a period after more than 1 word.
  var singleWordMatch = /(^(\w{2,})\b$)|(^((\w{2,})\b)[-]((\w{2,})\b)$)/g.test(singleWord);
  assert.ok(singleWordMatch);

  var multipleWordArray = multipleWords.split(' ');
  assert.ok(multipleWordArray.length === 5);
});
test('Ipsum returns a range of words', function(assert) {
  var result = ipsumText(false, {capitalize: true, range: "1-3", structure: "w"});
  // result should have a sentence, first work capitalize, with a period after more than 1 word.
  var testResultArray = result.split(' ');
  assert.ok(1 < testResultArray  < 4);
});
// // Replace this with your real tests.
// test('Ipsum returns paragraphs', function(assert) {
//   expect(3);
//   var result = ipsumText(false, {capitalize: true, range: "1", structure: "s"});
//   // result should have a sentence, first work capitalize, with a period after more than 1 word.
//   var testResultArray = result.split(' ');
//   // split by spaces
//   // first word is capitalized
//   // indexOf "."
//   assert.equals(result);
// });
