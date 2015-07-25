/** @ngInject */
export function ListController($q, BreweryService) {
  'use strict';
  var vm = this;

  vm.$q = $q;
  vm.BreweryService = BreweryService;
}

ListController.prototype.canActivate = function() {
  'use strict';
  var vm = this;

  return vm.$q(function(resolve) {
    return vm.BreweryService.getList(function(breweries) {
      vm.breweries = breweries;
      resolve();
    });
  });
};
