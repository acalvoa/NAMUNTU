/**
* Activity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id_activity: {
  		type: "integer",
  		primaryKey: true
  	},
  	users: {
  		model: "users"
  		via:"activities"
  	}

  }
};

