(function() {
  'use strict';

  /** @ngInject */
  function DetailController($q, $routeParams, breweryService) {
    this.$q = $q;
    this.$routeParams = $routeParams;
    this.breweryService = breweryService;
  }

  DetailController.prototype.canActivate = function() {
    var vm = this;

    return vm.$q(function(resolve, reject) {
      return vm.breweryService.getOne(vm.$routeParams.id, function(brewery) {
        vm.brewery = brewery;
        resolve();
      });
    });
  }

  angular
    .module('5to6')
    .controller('DetailController', DetailController);

})();
