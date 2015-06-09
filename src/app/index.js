'use strict';

angular.module('puzzle', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap','ngDisqus'])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $disqusProvider) {
    $disqusProvider.setShortname('puzzlr');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        title: 'Puzzle'
      })
      .state('homePage', {
        url: '/page/:page',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        title: 'Puzzle'
      })
      .state('notfound', {
        templateUrl: 'app/notfound/notfound.html',
      })
      .state('notfound.page', {
        url: '/404',
        templateUrl: 'app/notfound/notfound.html',
      })
      .state('about', {
        url: 'about',
        templateUrl: 'app/static/about.html',
        controller: 'StaticCtrl',
        title: 'О нас'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/static/contacts.html',
        controller: 'StaticCtrl',
        title: 'Контакты'
      })
      .state('page', {
        url: '/:node',
        templateUrl: "app/page/page.html",
        controller: "PageCtrl"
      });
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/404');
    $locationProvider.hashPrefix('!');
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });
  })

  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event) {
      $rootScope.title = $state.current.title || 'Puzzle';
      $rootScope.kwds = $state.current.kwds || 'Puzzle';
      $rootScope.descr = $state.current.descr || 'Puzzle';
    });
    
  });
;
