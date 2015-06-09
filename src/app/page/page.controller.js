'use strict';

function PageCtrl($scope, Post, $stateParams, $state, ReloadCount, $rootScope) {
	
    Post.get($stateParams).$promise.then(function(result) {
        $scope.post = result;
        $rootScope.title = result.title;
        $rootScope.kwds = result.kwds;
        $rootScope.descr = result.descr;
        ReloadCount.reload();
    },
    function() {
        $state.go('notfound');
    });

}

angular.module('puzzle')
    .controller('PageCtrl', PageCtrl);