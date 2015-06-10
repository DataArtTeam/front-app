'use strict';

angular.module('puzzle')
    .factory('Search', function($resource) {
        return $resource('/api/search/:page?word&id')
    });