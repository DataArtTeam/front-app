'use strict';

angular.module('puzzle', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'ngDisqus', 'ngSocial'])
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
        controller: 'NotfoundCtrl'
      })
      .state('notfound.page', {
        url: '/404',
        templateUrl: 'app/notfound/notfound.html',
        controller: 'NotfoundCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/static/about.html',
        controller: 'StaticCtrl',
        title: 'About'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'app/static/contacts.html',
        controller: 'StaticCtrl',
        title: 'Contacts'
      })
      .state('search', {
        url: '/search/:page?w=&id',
        templateUrl: 'app/search/search.html',
        title: 'Search results'
      })
      .state('page', {
        url: '/:node',
        templateUrl: "app/page/page.html",
        controller: "PageCtrl"
      })
      .state('page.comments', {
        url: '#disqus_thread',
        templateUrl: 'app/page/page.html',
        controller: 'PageCtrl'
      });
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/404');
    $locationProvider.hashPrefix('!');
  })

  .run(function ($rootScope, $state, $window, Tags, $stateParams, $modal) {
    $rootScope.$on('$stateChangeStart', function(event) {
      $rootScope.title = $state.current.title || 'Puzzle';
    });
    $window.disqus_config = function() {
      this.callbacks.onReady = [function() {
        $rootScope.$emit('disqus.load', true);
      }];
    }

    Tags.query().$promise.then(function(result) {
        $rootScope.tags = result;
    }, function() {
        $state.go('notfound');
    });

    $rootScope.openSearchModal = function () {
        var modalInstance = $modal.open({
          animation: true,
          templateUrl: 'app/components/search_modal/search_modal.html',
          controller: 'SearchModalCtrl'
        });
    };
    
  });
;