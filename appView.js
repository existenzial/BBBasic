var AppView = Backbone.View.extend({      
  /*
  Initialize is the first function called when the view for the entire app is instantiated
  */
  initialize: function(params){
    this.allModelsView = new AllModelsView({});
    this.modelOneView = new ModelOneView({});
    this.modelTwoView = new ModelTwoView({});
    this.render();
  },

  /*
  Renders the view for your app, and any additional views for models you want within that view should also be rendered individually within the html '[ ]' parameter as "this.viewName.$el(where viewName is whatever additional views you want to appear when the app first starts delimited by a ',')." 
  */
  render: function(){
    return this.$el.html([this.allModelsView.$el, this.modelOneView.$el, this.modelTwoView.$el]);
    //
  }
});

/*
-EVERY MODEL NEEDS AN INDIVIDUAL VIEW IF YOU WANT TO SEE IT RENDERED ON YOUR PAGE

-EVERY COLLECTION NEEDS A SEPERATE VIEW IF YOU WANT TO SEE THE MODEL VIEWS RENDERED TOGETHER IN IT
*/

var ModelOneView = Backbone.View.extend({
  /*
  The following code handles the visible DOM representation of your first model
  */

  tagName: 'tr', 
 /* 
 You can change tagName to represent whatever html element you want your node to appear as. In this example it appears as an 'tr' (table row) but could be represented as a 'li' (list item) or whatever you'd like.
 */

  initialize: function(params){
    model: ModelOne, //set the model for the view
    this.template = _.template('<tr>This is ModelOne</tr>') //optional, but can be helpful to set an html template for the model once displayed
    this.render(); //call render to render the model once it's initialized

    console.log('ModelOneView is Initialized'); //optional, this line will let you know that the ModelOneView is instantiated and initialized
  },

  render: function(){
    return this.$el;
  }
});

var ModelTwoView = Backbone.View.extend({
  tagName: 'tr',

  initialize: function(params){
    model: ModelTwo, //set the model
    this.template = _.template('<tr>This is ModelTwo</tr>'); //optional, but can be helpful to set an html template for the model once displayed
    this.render(); //call render to render the model once it's initialized

    console.log('ModelTwoView is Initialized'); //optional, this line will let you know that the ModelTwoView is instantiated and initialized
  },

  render: function(){
    return this.$el;
  }
});

var AllModelsView = Backbone.View.extend({

  tagName: 'table', //set as an 'ul' (unordered list), but can be adjusted depending on how you'd like to display all of your model views together on the page

  initialize: function(params){
    model: CollectionOfModelOnes, //set the model to one of your Collections of models
    this.template = _.template('<thead>This is the View Containing All Models</thead>'); //optional, but can be helpful to set an html template for the model once displayed
    this.render(); 
    //call render to render the model once it's initialized

    console.log('AllModelsView is Initialized'); //optional, this line will let you know that the AllModelsView is instantiated and initialized
  },

  render: function(){

    var self = this;
  /*
    If you are unsure about the binding of "this" and what "$el" refer to in the context of Backbone, uncomment the lines below

    console.log('this is this...', this);
    console.log('this is this.$el ', this.$el)
  */
    return this.$el.html([
      this.$el.modelOneView, 
      this.$el.modelTwoView
    ]);

    // return this;
  }
});
