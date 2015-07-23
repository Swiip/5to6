(function() {
  'use strict';

  /** @ngInject */
  function ListController($q, breweryService) {
    this.$q = $q;
    this.breweryService = breweryService;
  }

  ListController.prototype.canActivate = function() {
    var vm = this;

    return vm.$q(function(resolve, reject) {
      return vm.breweryService.getList(function(breweries) {
        vm.breweries = breweries;
        resolve();
      });
    });
  }

  angular
    .module('5to6')
    .controller('ListController', ListController);

})();
