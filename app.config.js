'use strict';


angular.
  module('routingApp').
    config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('home',{
          url: '/',
          views: {
              '': {templateUrl: 'template.html'},
              'content@home': {
                templateUrl: 'routing-main/main-page.view.html',
                controller: 'MainPageController',
                controllerAs: 'main'
              }
          }
        })
        .state('home.sub',{
          url:'home/sub',
          views: {
            'content@home': {
              templateUrl: 'routing-sub-page/sub-page.view.html',
              controller: 'SubPageController',
              controllerAs: 'sub'
            }
          }
        })
        .state('about', {
          url: '/about',
          views: {
            '':{templateUrl: 'template.html'},
            'content@about': {
              templateUrl: 'routing-about/about.view.html',
              controller: 'AboutPageController',
              controllerAs: 'about'
            }
          }
        })
        .state('error',{
          url: '/error',
          views: {
            '':{templateUrl: 'template.html'},
            'content@error': {
              template:'<h1 class="text-info">404 not found</h1>'
            }
          }

        });
      $urlRouterProvider.otherwise('/error');

    });
