'use strict';

function PageCtrl($scope, Post, $stateParams, $state, ReloadCount, $rootScope, $location, $uiViewScroll) {
    
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

    $rootScope.$on('disqus.load', function () {
        var elem = $('#disqus_thread'),
            hash = $location.hash();
        if(elem.length > 0 && hash === 'disqus_thread') {
            $uiViewScroll(elem);
        }
    });

    $scope.absUrl = $location.absUrl();

}

angular.module('puzzle')
    .controller('PageCtrl', PageCtrl);