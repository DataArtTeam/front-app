'use strict';

angular.module('puzzle')
    .factory('Posts', function($resource) {
        return $resource('/api/allarticles/:page');
    });