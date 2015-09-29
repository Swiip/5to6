(function() {
  'use strict';

  /** @ngInject */
  function ListController($q, BreweryService) {
    var vm = this;

    vm.$q = $q;
    vm.BreweryService = BreweryService;
  }

  ListController.prototype.canActivate = function() {
    var vm = this;

    return vm.$q(function(resolve) {
      return vm.BreweryService.getList(function(breweries) {
        vm.breweries = breweries;
        resolve();
      });
    });
  };

  angular
    .module('5to6')
    .controller('ListController', ListController);

})();
