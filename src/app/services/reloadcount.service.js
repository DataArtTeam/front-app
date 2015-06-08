'use strict';

angular.module('puzzle')
    .factory('ReloadCount', function() {
        return {
            reload: function() {
                window.DISQUSWIDGETS = undefined;
                $.getScript("http://" + disqus_shortname + ".disqus.com/count.js");
            }
        }
    });