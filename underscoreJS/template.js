 var myState = {
  name: "Washington",
  capital: "Olympia",
  population: 7062000,
  nickname: "The Evergreen State"
 };
 var businesses = [
  {
   name: "Coding Dojo",
   city:  "Bellevue"
  },
  {
   name: "Facebook",
   city: "Mountain View"
  },
  {
   name: "Microsoft",
   city: "Redmond"
  },
  {
   name: "Expedia",
   city: "Bellevue"
  }
 ];

$(document).ready(function() {
  // 1 Strip the myState object into two arrays, one filled with its keys, the other with its values.
  console.log(myState);
  var keyArr = [];
  var valueArr = [];
  _.pairs(myState).forEach(element => {
    var key = element[0];
    var value = element[1];
    keyArr.push(key);
    valueArr.push(value);
  });
  console.log(keyArr);
  console.log(valueArr);

  //2 Using these two new arrays, put them back together as an object to resemble the original myState object.
  var myState2 = _.object(keyArr, valueArr);
  console.log(myState2);

  //3 Alert each of the key - value pairs of the myState object.
  _.each(myState, function(value, key) {
  //  alert(key + ': ' + value);
  });

  //4 Return just the names of the businesses from the businesses array.
  var businessNames = [];
  _.each(businesses, function(value, key) {
    businessNames.push(value.name);
  });
  console.log(businessNames);

  //5 Return the object containing “Microsoft”.
  var m = _.find(businesses, function(buiness) {
    return buiness.name == "Microsoft";
  });
  console.log(m);

  //6 Return all the businesses that are located in Bellevue in a new array.
  var businessInBellevue = _.filter(businesses, function(buiness) {
    return buiness.city == "Bellevue";
  })
  console.log(businessInBellevue);

  //7 Sort the businesses based on the city in ascending order and return the array.
  var sorted = _.sortBy(businesses, "city");
  console.log(sorted);

  //8 Have all the business names be “Coding Dojo” without altering the original array. [hint: use _.map()]
  var newBusinesses = _.map(businesses, function(business){ return business.name = "Coding Dojo"});
  console.log(newBusinesses);


// var ironman = {
//   name: "Tony Stark",
//   alias: "Iron Man"
//  };
//  var avengers_array = [
//   {name: "Tony Stark", alias: "Iron Man", ability: "flight"},
//   {name: "Bruce Banner", alias: "The Incredible Hulk", ability: "superhuman strength"},
//   {name: "Steve Rogers", alias: "Captain America", ability: "superhuman strength"},
//   {name: "Clint Barton", alias: "Hawkeye", ability: "superior hand-eye coordination"},
//   {name: "Thor Odinson", alias: "Thor", ability: "teleportation"},
//   {name: "Natasha Romanova", alias: "Black Widow", ability: "espionage"}
//  ];

  // var outputContent = "There are " + avengers_array.length + " Avengers"
  // var result = _.countBy(avengers_array, function(avenger) {
  //   return avenger.ability;
  // });
  // _.pairs(result).forEach (function(typeCountPair) {
  //   var key = typeCountPair[0];
  //   var value = typeCountPair[1];
  //   outputContent += "<br />";
  //   outputContent += " - " + value + " of type: " + key;
  // });

  // .map()
  //var avengersAssemble = _.map(avengers_array, function(avenger){ return avenger; });
  
  // .pluck()
  //var avengerNames = _.pluck(avengers_array, 'name');
  
  // var outputContent = [];
  // var superhumanStrengthAvengersArray = _.where(avengers_array, {ability: "superhuman strength"});
  // console.log(superhumanStrengthAvengersArray);
  // _.each(superhumanStrengthAvengersArray, function(value, key) {
  //   outputContent += "<br />";
  //   outputContent += value.name + " - " + value.alias + " - " + value.ability;
  //   console.log(value, key);
  // });
  // var superhumanStrengthAvenger = _.findWhere(avengers_array, {ability: "superhuman strength"});
  // console.log(superhumanStrengthAvenger);

  // var superhumanStrengthAvengers = _.filter(avengers_array, function(avenger){ return avenger.ability == "superhuman strength"; });
  // console.log(superhumanStrengthAvengers);

  // var sortedAvengerNames = _.sortBy(avengers_array, 'name');
  // _.each(sortedAvengerNames, function(value, key) {
  //   console.log(value.name + " " + key);
  // })
  // $("#output").html(outputContent);
  
});