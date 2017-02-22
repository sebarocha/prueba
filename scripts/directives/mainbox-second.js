angular.module('myApp')
.directive('mainboxsecond', function() {
	return {
		templateUrl: 'templates/mainbox-second.html',
		controller: 'mainCtrl',
		replace: true
	}
});