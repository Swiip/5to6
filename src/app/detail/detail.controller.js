(function() {
  'use strict';

  /** @ngInject */
  function DetailController($q, $routeParams, BreweryService) {
    var vm = this;

    vm.$q = $q;
    vm.$routeParams = $routeParams;
    vm.BreweryService = BreweryService;
  }

  DetailController.prototype.canActivate = function() {
    var vm = this;

    return vm.$q(function(resolve) {
      return vm.BreweryService.getOne(vm.$routeParams.id, function(brewery) {
        vm.brewery = brewery;
        resolve();
      });
    });
  };

  angular
    .module('5to6')
    .controller('DetailController', DetailController);

})();
