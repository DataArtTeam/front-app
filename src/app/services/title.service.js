'use strict';

angular.module('puzzle')
    .factory('Page', function() {
      var title = 'default';
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle; }
      };
});