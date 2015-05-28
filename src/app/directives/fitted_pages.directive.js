'use strict';

angular.module('puzzle')
    .directive('fittedPages', function() {
        return {
            restrict: 'A',
            templateUrl: 'app/directives/fitted_pages.html',
            controller: function($scope, Fitted, $state) {
                Fitted.query().$promise.then(function(result) {
                    $scope.pages = result;
                },
                function() {
                    $state.go('notfound');
                });
            }
        };
    });