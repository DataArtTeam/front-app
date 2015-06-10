'use strict';

function MainCtrl($scope, Posts, $state, Search, ReloadCount, $stateParams) {

    var pageCount;
    $scope.page = parseInt($stateParams.page) || 1;
    $scope.count = 101;
    $scope.num = 20;

    pageCount = Math.floor($scope.count / $scope.num);
    if($scope.count % $scope.num > 0) {
        pageCount += 1;
    }
    $scope.pageCount = pageCount;
    $scope.pageCountsArr = function () {
        return new Array(pageCount);
    };

    $scope.nextPage = (pageCount === $scope.page) ? pageCount : $scope.page+1;
    $scope.prevPage = ($scope.page === 1) ? 1 : $scope.page-1;

    Posts.query({page: $scope.page}).$promise.then(function(result) {
        $scope.posts = result;

        ReloadCount.reload();
    }, function() {
        $state.go('notfound');
    });

}
angular.module('puzzle')
    .controller('MainCtrl', MainCtrl);
