'use strict';

function PageCtrl($scope, Post, $stateParams, $state, ReloadCount, $rootScope, $location, $anchorScroll) {
    
    Post.get($stateParams).$promise.then(function(result) {
        $scope.post = result;
        $rootScope.title = result.title;
        $rootScope.kwds = result.kwds;
        $rootScope.descr = result.descr;
        $scope.goDisqus();
        ReloadCount.reload();
    },
    function() {
        $state.go('notfound');
    });

    $scope.goDisqus = function () {
        $anchorScroll();
    }

    $scope.absUrl = $location.absUrl();
}

angular.module('puzzle')
    .controller('PageCtrl', PageCtrl);