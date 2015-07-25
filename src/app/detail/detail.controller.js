/** @ngInject */
export function DetailController($q, $routeParams, BreweryService) {
  'use strict';
  var vm = this;

  vm.$q = $q;
  vm.$routeParams = $routeParams;
  vm.BreweryService = BreweryService;
}

DetailController.prototype.canActivate = function() {
  'use strict';
  var vm = this;

  return vm.$q(function(resolve) {
    return vm.BreweryService.getOne(vm.$routeParams.id, function(brewery) {
      vm.brewery = brewery;
      resolve();
    });
  });
};
