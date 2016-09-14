'use strict';

angular.
  module('mainPage').
  component('mainPage', {
    templateUrl: 'routing-main/routing-main.template.html',
    controller: function MainPageController() {
      var mainPage = this;
      mainPage.name="mainPage name Routing main";
    }
  });
