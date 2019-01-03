var PersonModel = Backbone.Model.extend({
  default: {
    name: null,
  }
});

var badGuy = new PersonModel({name: "Oddjob"});
console.log(badGuy);

var goodGuy = new PersonModel({name: "Jellycat"});
console.log(goodGuy.attributes.name);
console.log(goodGuy.toJSON().name);
var greetingTemplate = _.template("<h1>Hey there, <%= name %>!</h1>");
console.log(greetingTemplate(goodGuy.toJSON()));
$(document).ready(function(){
  $('#person').append(greetingTemplate(badGuy.toJSON()));
});
