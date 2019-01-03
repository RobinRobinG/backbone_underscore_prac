var PersonModel = Backbone.Model.extend({
  default: {
    name: null,
  }
});
var StackModel = Backbone.Model.extend({
  default: {
    name: null,
  }
});

var barry = new PersonModel({name: "Barry"});
var larry = new PersonModel({name: "Larry"});
var terry = new PersonModel({name: "Terry"});
var jerry = new PersonModel({name: "Jerry"});
var harry = new PersonModel({name: "Harry"});

var ruby = new StackModel({name: "Ruby"});
var ios = new StackModel({name: "IOS"});
var lamp = new StackModel({name: "LAMP"});
var mean = new StackModel({name: "MEAN"});
var python = new StackModel({name: "Python"});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<div class='redbox'><%= name %></div>"),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    $('.people').append(this.$el);
    return this;
  }
});
var personView1 = new PersonView({model: barry});
var personView2 = new PersonView({model: larry});
var personView3 = new PersonView({model: terry});
var personView4 = new PersonView({model: jerry});
var personView5 = new PersonView({model: harry});

var StackView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<div class='greenbox'><%= name %></div>"),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    $('.stacks').append(this.$el);
    return this;
  }
});
var StackView1 = new StackView({model: ruby});
var StackView2 = new StackView({model: ios});
var StackView3 = new StackView({model: lamp});
var StackView4 = new StackView({model: mean});
var StackView5 = new StackView({model: python});