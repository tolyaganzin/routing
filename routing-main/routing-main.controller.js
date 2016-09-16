'use strict';

// Register MainPageController

angular.
  module('mainPage').
  controller('MainPageController', [
    function () {
      var mainPage = this;
      mainPage.name="home";
  }]);


// angular.
//   module('mainPage').
//   controller('MainPageController', function MainPageController() {
//     var mainPage = this;
//     mainPage.name="home";
//   });
