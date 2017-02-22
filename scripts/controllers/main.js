'use strict';

angular.module('myApp')
.controller('mainCtrl', function($scope, dataService) {
	dataService.getPeople(function(response) { 
		console.log(response.data);  
		$scope.people = response.data;
	});

	// Count the number of selected items
    // $scope.selectedPeople = 0;
    // $scope.change = function (person) {
    //     if (person.selected) {
    //         $scope.selectedPeople++
    //     } else {
    //         $scope.selectedPeople--
    //     }
    // };
    
    $scope.$watch('people', function(people){
		$scope.count = 0;
		angular.forEach(people, function(person){
			if(person.selected){
				$scope.count++
			}
		})
	}, true);
})