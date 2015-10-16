import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
        return [
    {title: "Mobile Software Engineering", has_user: true},
    {title: "Why commit Fragment Transaction in MasterDetail pattern", has_user: false},
    {title: "Input on Android for High School class", has_user: false},
    {title: "Recommended charting library/packages?", has_user: false},
    {title: "Clarification on the Order of Broadcast Intent Processing", has_user: false},
    {title: "How do you inspect an APK ?", has_user: true},
    {title: "A nice custom ListView item view pattern", has_user: false},
    {title: "android broadcasts monitor app", has_user: false},
    {title: "whirlwind android tour", has_user: false},
    {title: "Got an app you'd like to share? Post it here!", has_user: false},
    {title: "Authoritative!", has_user: false},
    {title: "Android rules!!", has_user: false}
    ];
  }
});
