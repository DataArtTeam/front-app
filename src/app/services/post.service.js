'use strict';

angular.module('puzzle')
    .factory('Post', function($resource) {
        return $resource('/api/article/:node');
    });