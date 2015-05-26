'use strict';

function PageCtrl($scope, Post, $stateParams, $state) {
    Post.get($stateParams).$promise.then(function(result) {
        $scope.post = result;
    },
    function() {
        $state.go('notfound');
    });
}

angular.module('puzzle')
    .controller('PageCtrl', PageCtrl);