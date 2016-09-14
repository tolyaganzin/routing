'use strict';


angular.
  module('routingApp').
    config(function ($stateProvider, $urlRouterProvider) {
      // $stateProvider.hashPrefix('!');
      $urlRouterProvider.otherwise('/main-page');

      $stateProvider
        .state('main-page',{
          url: '/main-page',
          views: {
              '': {
                templateUrl: 'routing-main/routing-main.template.html',
                controller: 'MainPageController'
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
