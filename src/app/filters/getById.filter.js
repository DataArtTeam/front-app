'use strict';

angular.module('puzzle')
    .filter('getById', function() {
        return function (input, ids) {
            var i = 0, 
                length = input.length,
                result = [];
            for(;i<length;i++) {
                if(ids.indexOf(input[i].id) >= 0) {
                    result.push(input[i]);
                }
            }
            return result;
        };
    });