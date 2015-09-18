import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('nav-bar-spanish', 'Integration | Component | nav bar spanish', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nav-bar-spanish}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#nav-bar-spanish}}
      template block text
    {{/nav-bar-spanish}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
