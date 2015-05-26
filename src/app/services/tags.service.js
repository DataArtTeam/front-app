'use strict';

angular.module('puzzle')
    .factory('Tags', function($resource) {
        return $resource('/api/tags');
    });