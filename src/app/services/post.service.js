'use strict';

angular.module('puzzle')
    .factory('Post', function($resource) {
        return $resource('/api/posts/:url');
    });