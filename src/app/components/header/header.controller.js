'use strict';

function HeaderCtrl($scope, $stateParams, $state) {
    
    $scope.$on('$stateChangeSuccess', function(event) {
        $scope.searchWord = $stateParams.w || "";
    })

    $scope.searchAction = function() {
        if($scope.searchWord) {
            $state.go('search', {w: $scope.searchWord, id: null});
        }
    }
}

angular.module('puzzle')
    .controller('HeaderCtrl', HeaderCtrl);