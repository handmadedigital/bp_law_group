import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('mega-drop-spanish', 'Integration | Component | mega drop spanish', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mega-drop-spanish}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#mega-drop-spanish}}
      template block text
    {{/mega-drop-spanish}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
