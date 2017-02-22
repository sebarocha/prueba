angular.module('myApp')
.directive('data', function() {
	return {
		templateUrl: 'templates/data.html',
		controller: 'mainCtrl',
		replace: true
	}
});