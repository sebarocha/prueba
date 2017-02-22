angular.module('myApp')
.directive('mainboxfirst', function() {
	return {
		templateUrl: 'templates/mainbox-first.html',
		controller: 'mainCtrl',
		replace: true
	}
});