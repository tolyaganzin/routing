'use strict';

// Define the `npmData` service
angular.module('aboutPage').
  factory('npmDataService', ['$http',
    function ($http) {
      var getDataService = {};
      $http.get('../package.json').
        success(function(data, status) {
           getDataService.npmServiceData = data;
        }).
        error(function(data, status){
           getDataService.npmServiceData = data;
         });
         return getDataService;
    }]);
