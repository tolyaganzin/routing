'use strict';


angular.
  module('routingApp').
    config(function ($stateProvider, $urlRouterProvider) {
      // $stateProvider.hashPrefix('!');
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home',{
          url: '/home',
          views: {
              '': {templateUrl: 'template.html'},
              'content@home': {
                templateUrl: 'routing-main/main-view.html',
                controller: 'MainPageController',
                controllerAs: 'main'
              }
          }
        })
        .state('home.sub',{
          url:'/sub',
          views: {
            'content@home': {
              templateUrl: 'routing-sub-page/routing-sub-page.template.html',
              controller: 'SubPageController',
              controllerAs: 'sub'
            }
          }
        });
    });


// angular.
//   module('routingApp').
//   config(['$locationProvider' ,'$routeProvider',
//     function config($locationProvider, $routeProvider) {
//       $locationProvider.hashPrefix('!');
//
//       $routeProvider.
//         when('/main-page', {
//           template: '<main-page></main-page>'
//         }).
//         // when('/phones/:phoneId', {
//         //   template: '<phone-detail></phone-detail>'
//         // }).
//         otherwise('/main-page');
//     }
//   ]);
