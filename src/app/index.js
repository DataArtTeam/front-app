'use strict';

angular.module('puzzle', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap','ngDisqus'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $disqusProvider) {
    $disqusProvider.setShortname('puzzlr');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('notfound', {
        templateUrl: 'app/notfound/notfound.html',
      })
      .state('notfound.page', {
        url: '/404',
        templateUrl: 'app/notfound/notfound.html',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/static/about.html',
        controller: 'StaticCtrl'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/static/contacts.html',
        controller: 'StaticCtrl'
      })
      .state('page', {
        url: '/:node?comments',
        templateUrl: "app/page/page.html",
        controller: "PageCtrl"
      });
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/notfound');
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })
;
