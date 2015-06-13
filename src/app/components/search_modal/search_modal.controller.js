'use strict';

angular.module('puzzle')
    .controller('SearchModalCtrl', function($scope, $modalInstance, $stateParams, $state, $rootScope) {
        var ids = [];

        if($stateParams.id) {
            ids = $stateParams.id.split(',');
        }

        $scope.tags = [];

        angular.forEach($rootScope.tags, function(value, key) {
            value.active = (ids.indexOf(value.id) >= 0) ? true : false;
            this.push(value);
        }, $scope.tags);

        $scope.searchWord = $stateParams.w || "";

        $scope.ok = function () {
            $modalInstance.close();
            $state.go('search',$scope.createUrl());
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.createUrl = function() {
            var id = [],
                result = {};
            angular.forEach($scope.tags, function(value, key) {
                if(value.active) {
                    id.push(value.id);
                }
            });
            result.id = id.join(',');
            result.w = $scope.searchWord;
            return result;
        }
    });