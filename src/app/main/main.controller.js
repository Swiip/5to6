(function() {
  'use strict';

  angular
    .module('5to6')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(breweryService) {
    var vm = this;

    vm.pageNumber = -1;
    vm.breweries = [];

    vm.load = function(callback) {
      vm.pageNumber++;
      breweryService.getPage(vm.pageNumber, function(breweries) {
        vm.breweries = vm.breweries.concat(breweries);
        callback();
      });
    };
  }
})();
