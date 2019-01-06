var TeamModel = Backbone.Model.extend({
  default: {
    name: null,
    nickname: null,
    year: null
  }
});

var TeamList = Backbone.Collection.extend({
  model: TeamModel
});

var leicester = new TeamModel({name: "Leicester City", nickname: "The Foxes", year: 1884});
var arsenal = new TeamModel({name: "Arsenal", nickname: "The Gunners", year: 1886});
var manchester = new TeamModel({name: "Manchester United", nickname: "The Red Devils", year: 1878});
var everton = new TeamModel({name: "Everton", nickname: "The Toffees", year: 1878});
var tottenham = new TeamModel({name: "Tottenham Hotspur", nickname: "Spurs", year: 1882});

var myTeamNameTemplate = "<div class='redbox'><%= name %></div>"
var myTeamHistoryTemplate = "<div class='greenbox'><p><%= name %></p><p><%= nickname %></p><p><%= year %></p></div>"
//team model view
var TeamView = Backbone.View.extend({
  tagName: 'li',
  template: _.template(myTeamNameTemplate),
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  events: {
    'click  .redbox': 'showHistory'
  },
  showHistory: function(){
    var teamhistory = new TeamHistoryView({model:this.model});
    teamhistory.render();
    //console.log(teamhistory);
  }
});

//team collection view
var TeamListView = Backbone.View.extend({
  el: '#teams',
  render: function(){
    this.$el.empty();
    this.collection.each(function(team){
      var teamview = new TeamView({model:team});
      this.$el.append(teamview.render().$el);
    }, this);
  },
  initialize: function(){
    this.render();
  }
});

//team history view
var TeamHistoryView = Backbone.View.extend({
  el: '#history',
  model: TeamModel,
  template: _.template(myTeamHistoryTemplate),
  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  initialize: function(){
    this.listenTo(this.model, "change", this.render);
  }
});

var myTeams = new TeamList([leicester, arsenal, manchester, everton, tottenham]);
var myTeamList = new TeamListView({collection: myTeams});
