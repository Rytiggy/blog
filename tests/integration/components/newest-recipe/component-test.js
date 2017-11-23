import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('newest-recipe', 'Integration | Component | newest recipe', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{newest-recipe}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#newest-recipe}}
      template block text
    {{/newest-recipe}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
