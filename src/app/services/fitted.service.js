'use strict';

angular.module('puzzle')
    .factory('Fitted', function($resource) {
        return $resource('/api/mainpage');
    });