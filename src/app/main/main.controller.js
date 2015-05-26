'use strict';

function MainCtrl($scope, Post, $state) {

    Post.query().$promise.then(function(result) {
        $scope.posts = result;
    }, function() {
        $state.go('notfound');
    });
}
angular.module('puzzle')
    .controller('MainCtrl', MainCtrl);
