'use strict';

// Define the `bowerData` service
angular.module('aboutPage').
  factory('bowerDataService', ['$http',
    function ($http) {
      var getDataService = {};
      $http.get('../bower.json').
        success(function(data, status) {
           getDataService.bowerServiceData = data;
        }).
        error(function(data, status){
           getDataService.bowerServiceData = data;
         });
         return getDataService;
    }]);
