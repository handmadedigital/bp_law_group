import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('team-tabs-spanisg', 'Integration | Component | team tabs spanisg', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{team-tabs-spanisg}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#team-tabs-spanisg}}
      template block text
    {{/team-tabs-spanisg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
