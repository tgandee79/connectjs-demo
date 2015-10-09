import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var messageTitles = [];
    for(let i = 0; i < 20; i++){
      messageTitles.push({title: this.loremTitle({range: '1-8', structure: 'w', capitalize: true})});
    }
    return messageTitles;
  },
  loremTitle: function(ipsumObj){
    var lorem = new window.Lorem();
    var count = 0;
    var hashrange = ipsumObj.range;
    var loremtype = window.Lorem.TYPE.PARAGRAPH;
    if (ipsumObj.range){
      var range = hashrange.split("-");
      count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
    } else if(ipsumObj.count){
      count = parseInt(ipsumObj.count);
    }
    if (/s/.test(ipsumObj.structure)) {
      loremtype = window.Lorem.TYPE.SENTENCE;
    } else if (/w/.test(ipsumObj.structure)) {
      loremtype = window.Lorem.TYPE.WORD;
    }
    var text = lorem.createText(count, loremtype);
    if(ipsumObj.capitalize){
      text = Ember.String.capitalize(text);
    }
    return text;
  }
});
