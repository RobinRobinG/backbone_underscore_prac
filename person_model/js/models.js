// var UserModel = Backbone.Model.extend({
//   defaults: {
//     name: null,
//     age: null
//   },
//   initialize: function(){
//     console.log('Hello! I am alive!');
//   }
// });

// var user1 = new UserModel({name: "Jonny", age: 21});

// // user1.set('name', "Todd");
// // console.log(user1.get('age'));
// console.log(user1);

var StackModel = Backbone.Model.extend({
  default: {
    title: null,
    instructor: null,
    language: null
  },
  initialize: function() {
    this.instructor = "Michael Choi";
  },
  validate: function(attrs, options){
    if(!attrs.title){
      return "Stack must have a title!"
    }
  }
});
var stack1 = new StackModel({title: "<script>alert('gotcha!')</script>", language:"Ruby"});
var stack2 = new StackModel({language:"JS"});
var stack3 = new StackModel({title: "Python", language:"Python"});
var escapedString = stack1.escape('title');

stack2.on('invalid', function(model, error){
  alert(model.get("title") + " found to be invalid. Reason: " + error);
});
stack2.save();

console.log(escapedString);
console.log(stack1);
console.log(stack2);
console.log(stack3);