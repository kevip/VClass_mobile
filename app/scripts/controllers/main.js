'use strict';

/**
 * @ngdoc function
 * @name vclassWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vclassWebApp
 */
angular.module('vclassWebApp')
  .controller('MainCtrl', function () {
    var vm = this;

    vm.menuTemplate = {
    	url: 'views/menu.html'
    }
  });
