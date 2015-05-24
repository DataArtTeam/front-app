'use strict';

function MainCtrl($scope, Post, $state) {

    var date = new Date();
    $scope.year = date.getFullYear();

    Post.query().$promise.then(function(result) {
        $scope.posts = result;
    }, function(error) {
        $state.go('notfound');
    });

}
angular.module('puzzle')
    .controller('MainCtrl', MainCtrl);
