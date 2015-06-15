'use sctrict';

angular.module('puzzle')
	.controller('NotfoundCtrl', function ($scope, $window) {
		$scope.$on('$stateChangeSuccess', function () {
			$('.notfound-container').height($window.innerHeight - $('#puzzle-header').outerHeight() - $('#puzzle_footer').outerHeight());
		})
	});