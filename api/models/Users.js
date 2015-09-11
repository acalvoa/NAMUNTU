/**
* Users.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		id:{
  			type: 'integer',
		    primaryKey: true,
		    columnName: 'id_user',
		    autoIncrement: true
  		},
  		nick: {
  			type:'string',
  			size:40
  		},
  		email:{
  			type:'email',
  			unique: true
  		},
  		country:{
  			type:'string',
  			size:50
  		},
  		social_networks:{
  			collection: 'social_networks',
  			via: 'id_user'
  		},
  		images:{
  			collection: 'images',
  			via: 'id_user'
  		}
  		languages:{
  			model: "languages",
  			via: "id_users"
  		},
  		activities:{
  			model: "activity",
  			via: "users"
  		}


  }
};

