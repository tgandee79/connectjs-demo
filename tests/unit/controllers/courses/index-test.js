import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:courses/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('Calling filterCourses', function(assert) {
  assert.expect(3);

  // get the controller instance
  var ctrl = this.subject();

  // check the properties before the action is triggered, default should be true
  assert.ok(ctrl.get('filter'));

  // call action and set to false
  ctrl.send('filterCourse', false);

  assert.notOk(ctrl.get('filter'));

  ctrl.send('filterCourse', true);
  assert.ok(ctrl.get('filter'));
});
