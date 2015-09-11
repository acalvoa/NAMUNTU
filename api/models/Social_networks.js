/**
* Social_networks.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  		id:{
  			type: 'integer',
		    primaryKey: true,
		    columnName: 'id_network',
		    autoIncrement: true
  		},
  		id_user: {
  			model:"users"
  		}
  }
};

