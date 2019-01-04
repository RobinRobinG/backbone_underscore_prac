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

var PeopleList = Backbone.Collection.extend({
  model: PersonModel
});
var StacksList = Backbone.Collection.extend({
  model:StackModel
});

var barry = new PersonModel({name: "Barry"});
var larry = new PersonModel({name: "Larry"});
var terry = new PersonModel({name: "Terry"});
var jerry = new PersonModel({name: "Jerry"});
var harry = new PersonModel({name: "Harry"});
var myPeople = new PeopleList([barry, larry, terry, jerry, harry]);

var ruby = new StackModel({name: "Ruby"});
var ios = new StackModel({name: "IOS"});
var lamp = new StackModel({name: "LAMP"});
var mean = new StackModel({name: "MEAN"});
var python = new StackModel({name: "Python"});
var myStacks = new StacksList([ruby, ios, lamp, mean, python]);

var myPersonTemplate = "<div class='redbox'><%= name %></div>"
var myStackTemplate = "<div class='greenbox'><%= name %></div>"

var PersonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template(myPersonTemplate),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

//collection view
var PeopleListView = Backbone.View.extend({
  el: '#people',
  render: function(){
    this.$el.empty();
    this.collection.each(function(person){
      var personview = new PersonView({model:person});
      this.$el.append(personview.render().$el);
    }, this);
  },
  initialize: function(){
   this.render();
  }
 });

var myPeopleList = new PeopleListView({collection: myPeople});


var StackView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<div class='greenbox'><%= name %></div>"),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

var StacksListView = Backbone.View.extend({
  el: '#stacks',
  render: function(){
    this.$el.empty();
    this.collection.each(function(stack){
      var stackview = new StackView({model:stack});
      this.$el.append(stackview.render().$el);
    }, this);
  },
  initialize: function(){
    this.render();
  }
});
var myStacksList = new StacksListView({collection: myStacks});
