(function() {
  'use strict';

  /** @ngInject */
  function ListController($q, breweryService) {
    var vm = this;

    vm.$q = $q;
    vm.breweryService = breweryService;
  }

  ListController.prototype.canActivate = function() {
    var vm = this;

    return vm.$q(function(resolve) {
      return vm.breweryService.getList(function(breweries) {
        vm.breweries = breweries;
        resolve();
      });
    });
  };

  angular
    .module('5to6')
    .controller('ListController', ListController);

})();
