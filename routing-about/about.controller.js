'use strict';

// Register AboutPageController

angular.
  module('aboutPage').
  controller('AboutPageController', ['npmDataService', 'bowerDataService', '$http',
    function (npmDataService, bowerDataService, $http) {
        this.name = "about";
        this.npmData = npmDataService;
        this.bowerData = bowerDataService;
  }]);
