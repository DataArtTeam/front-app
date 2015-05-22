'use strict';

angular.module('puzzle', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('page', {
        url: '/:node',
        templateUrl: 'app/page/page.html',
        controller: 'PageCtrl'
      });
    $urlRouterProvider.otherwise('/');
  })
;
