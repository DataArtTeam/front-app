'use strict';

angular.module('puzzle')
    .directive('tags', function() {
        return {
            restrict: 'A',
            templateUrl: 'app/directives/tags.html',
            controller: function($scope, $rootScope) {
                $scope.tag = $rootScope.tags;
            }
        };
    });