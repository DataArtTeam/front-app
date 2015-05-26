'use strict';

angular.module('puzzle')
    .directive('mostComments', function() {
        return {
            restrict: 'A',
            templateUrl: 'app/directives/most_comment.html',
            controller: function($scope, Post, $state) {
                Post.query().$promise.then(function(result) {
                    $scope.mostCommented = result;
                }, function() {
                    $state.go('notfound');
                });
            }
        };
    });