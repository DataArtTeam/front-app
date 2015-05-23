'use strict';

angular.module('puzzle', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.
          when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          }).
          when('/:node', {
            templateUrl: 'app/page/page.html',
            controller: 'PageCtrl'
          }).
          otherwise({
            templateUrl: 'app/notfound/notfound.html',
            controller: 'NotFoundCtrl'
          });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  })
;
