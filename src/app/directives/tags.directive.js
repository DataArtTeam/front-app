'use strict';

angular.module('puzzle')
    .directive('tags', function() {
        return {
            restrict: 'A',
            templateUrl: 'app/directives/tags.html',
            controller: function($scope, Tags, $state) {
                
                Tags.query().$promise.then(function(result) {
                    $scope.tag = result;
                }, function() {
                    $state.go('notfound');
                });

            }
        };
    });