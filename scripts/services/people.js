'use strict';

angular.module('myApp')
.service('dataService', function($http) {
	this.getPeople = function(callback){
		$http.get('mock/people.json')
		.then(callback)
	};
});