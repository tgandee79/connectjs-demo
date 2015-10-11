import Ember from 'ember';

export function ipsumText(params, hash) {
  // hash should have range, count, capitalize, structure (p,s,w) for paragraph, sentence, word
  var lorem = new window.Lorem();
  var count = 0;
  var hashrange = hash.range;
  var loremtype = window.Lorem.TYPE.PARAGRAPH;
  if (hash.range){
    var range = hashrange.split("-");
    count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
  } else if(hash.count){
    count = parseInt(hash.count);
  }
  if (/s/.test(hash.structure)) {
    loremtype = window.Lorem.TYPE.SENTENCE;
  } else if (/w/.test(hash.structure)) {
    loremtype = window.Lorem.TYPE.WORD;
  }
  var text = lorem.createText(count, loremtype);
  if(hash.capitalize){
    text = Ember.String.capitalize(text);
  }
  return text;
}

export default Ember.Helper.helper(ipsumText);
