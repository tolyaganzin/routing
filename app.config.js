'use strict';


angular.
  module('routingApp').
    config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/error');
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
          url:'main/sub',
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
            'content@about': {templateUrl: 'routing-about/about.view.html'}
          }
        })
        .state('error',{
          url: '/error',
          views: {
            '':{templateUrl: 'template.html'},
            'content@error': {
              template:'<h1>404</h1>'+
              '<a ui-sref="home"class="btn btn-block mdl-button mdl-js-button mdl-js-ripple-effect">home</a>'
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
