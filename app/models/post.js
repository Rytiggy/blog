import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  dateCreated: DS.attr('string'),
  photos: DS.attr(),
  blogPost: DS.attr('string'),
  steps: DS.attr(),
  ingredients: DS.attr(),
  tags: DS.attr(),
  prepTime: DS.attr('string'),
  cookTime: DS.attr('string'),
  recipeYield: DS.attr('string')
});
