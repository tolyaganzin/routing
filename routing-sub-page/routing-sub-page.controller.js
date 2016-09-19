'use strict';

// Register MainPageController

angular.
  module('subPage').
  controller('SubPageController', [
    function () {
      this.name="subPage";
  }]);



// angular.
//   module('subPage').
//   controller('SubPageController', function MainPageController() {
//     var mainPage = this;
//     mainPage.name="subPage";
//   });
