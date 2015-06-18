'use strict';

angular.module('puzzle')
    .filter('rawHtml', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        }
    });