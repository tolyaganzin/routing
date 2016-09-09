'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('mainPage').
  component('mainPage', {
    templateUrl: 'routing-main/routing-main.template.html',
    controller: function MainPageController() {
      var mainPage = this;
      mainPage.name="mainPage name Routing main";
    }
  });
