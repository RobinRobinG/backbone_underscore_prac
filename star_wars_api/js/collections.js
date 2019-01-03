var StarWarsModel = Backbone.Model.extend({
  default: {
    name: null,
    url: null,
    manufacturer: null,
    crew: null,
    cost_in_credits: null
  }
});

var StarWarsCollection = Backbone.Collection.extend({
  model: StarWarsModel,
  url: 'http://swapi.co/api/starships',
  parse: function(starships) {
    return starships.results;
  },
  falconChecker: function(){ 
    _.each(this.models, function(ship){
      if(ship.get("name") == "Millennium Falcon") {
        ship.set('cost_in_credits', "priceless");
      }
    })
  }
});

var sw = new StarWarsCollection();
sw.fetch().then(function(){
  sw.falconChecker();
  console.log(sw);
  var findFalcon = sw.findWhere({name: "Millennium Falcon"});
  console.log(findFalcon);
});




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