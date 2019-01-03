var PersonModel = Backbone.Model.extend({
  default: {
    name: null,
  }
});

var badGuy = new PersonModel({name: "Oddjob"});
var goodGuy = new PersonModel({name: "Jellycat"});


var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#greetingTemplate').html()),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    $('body').append(this.$el);
    return this;
  }
});
