'use strict';

// Register SubPageController

angular.
  module('subPage').
  controller('SubPageController', [
    function () {
      this.name="subPage";
      this.format = "d MMMM yyyy h:mm:ss:sss a Z";
  }]);



// angular.
//   module('subPage').
//   controller('SubPageController', function MainPageController() {
//     var mainPage = this;
//     mainPage.name="subPage";
//   });
