angular.module('myApp')
.directive('header', function() {
	return {
		templateUrl: 'templates/header.html',
		controller: 'mainCtrl',
		replace: true
	}
})