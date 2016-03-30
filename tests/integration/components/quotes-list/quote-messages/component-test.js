import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('quotes-list/quote-messages', 'Integration | Component | quotes list/quote messages', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{quotes-list/quote-messages}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#quotes-list/quote-messages}}
      template block text
    {{/quotes-list/quote-messages}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
