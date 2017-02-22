angular.module('myApp')
.directive('pager', function() {
	return {
		templateUrl: 'templates/pager.html',
		controller: 'mainCtrl',
		replace: true
	}
});