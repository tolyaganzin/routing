'use strict';

angular.
  module('routingApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/main-page', {
          template: '<main-page></main-page>'
        }).
        // when('/phones/:phoneId', {
        //   template: '<phone-detail></phone-detail>'
        // }).
        otherwise('/main-page');
    }
  ]);
