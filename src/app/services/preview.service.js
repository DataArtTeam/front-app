'use strict';

angular.module('puzzle')
    .factory('Preview', function ($resource) {
        return $resource('/api/preview/:key');
    });