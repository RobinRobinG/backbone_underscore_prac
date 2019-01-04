var PokemonModel = Backbone.Model.extend({
  default: {
    name: null,
    url: null
  }
});

var PokemonCollection = Backbone.Collection.extend({
  model: PokemonModel,
  url: 'http://pokeapi.salestock.net/api/v2/pokemon/',
  //url: 'http://pokeapi.co/api/v2/pokemon/',
  parse: function(data) {
    //console.log(data);
    return data.results;
  }
});

var PokemonView = Backbone.View.extend({
  tagName: 'li',
  template: _.template("<h1><%= name %> - <%= url %></h1>"),
  initialize: function(){
    this.render();
  },
  render: function(){
    //this.$el.html(this.template(this.model.toJSON()));
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  events: {
    'dblclick': 'destroy'
  },
  destroy: function(){
    this.model.destroy();
  }
});

var PokemonListView = Backbone.View.extend({
  el: '#pokemon_list',
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.whatHappened);
  },
  render: function(){
    this.$el.empty();
    this.collection.each(function(pokemon){
      var pokemonView = new PokemonView({model:pokemon});
      this.$el.append(pokemonView.render().$el);
    }, this);
  },
  whatHappened: function(){
    console.log(this.collection, 'a pokemon got ejected');
    this.render();
  }
});

var pc = new PokemonCollection();
var myPokemonList = new PokemonListView({collection:pc});
pc.fetch();

// var TravelTimeModel = Backbone.Model.extend({
//   defaults:{
//   }
//  });
//  var TravelTimeCollection = Backbone.Collection.extend({
//   model: TravelTimeModel,
//   url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431"
//  })
//  var travelTimes = new TravelTimeCollection();
//  travelTimes.fetch().then(function(){
//    //console log the travelTimes collection
//    console.log(travelTimes);
//    //console log the length of the traveltimes collection
//    console.log(travelTimes.length);
//    //console log the 30th model in the list
//    console.log(travelTimes.at(29));
//    //console log the currenttime of the first model
//    console.log(travelTimes.models[0].attributes.CurrentTime);
//    //console log all the models with a currenttime of 10
//    var filterModels = _.filter(travelTimes.models, function(data){
//      return data.attributes.CurrentTime == 10;
//    });
//    console.log(filterModels);
//    //console log first model with the name: "Bellevue-Seattle via 520 (WB PM)"
//    var model1 = _.find(travelTimes.models, function(data){
//      return data.attributes.Name == "Bellevue-Seattle via 520 (WB PM)"
//    });
//    console.log(model1);
//  });