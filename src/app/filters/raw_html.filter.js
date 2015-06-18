'use strict';

angular.module('puzzle')
    .filter('rawHtml', function ($scope) {
        return function (val) {
            return $scope.trustAsHtml(val);
        }
    });