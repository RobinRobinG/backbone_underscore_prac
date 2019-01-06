
var StudentModel = Backbone.Model.extend({
  default:{
   name: null
  },
  initialize: function(){
   this.listenTo(this.model, 'change', this.studentChange);
  },
  studentChange: function(){
   console.log("Change caught by model!");
  }
 });
 var StudentCollection = Backbone.Collection.extend({
  model: StudentModel,
  initialize: function(){
   this.listenTo(this, 'change', this.studentChange);
   this.listenTo(this, 'add', this.studentAdded);
   this.listenTo(this, 'remove', this.studentRemoved)
  },
  studentChange: function(){
   console.log("I sensed a change in one of my students!");
  },
  studentAdded: function(){
   console.log("New student added!");
  },
  studentRemoved: function(){
    console.log("student removed!")
  }
 });

var barry = new StudentModel({name: "Barry"});
var larry = new StudentModel({name: "Larry"});
var terry = new StudentModel({name: "Terry"});
var jerry = new StudentModel({name: "Jerry"});

var myStudentCollection = new StudentCollection();
myStudentCollection.add([barry,larry]);
myStudentCollection.add(terry);
myStudentCollection.add(jerry);
console.log(myStudentCollection);
barry.attributes.name = "Jellycat!"
console.log(barry);
myStudentCollection.remove([terry, jerry]);
