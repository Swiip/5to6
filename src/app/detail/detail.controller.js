(function() {
  'use strict';

  angular
    .module('5to6')
    .controller('DetailController', DetailController);

  /** @ngInject */
  function DetailController($routeParams, breweryService) {
    var vm = this;

    console.log('detail', $routeParams);

    vm.brewery = breweryService.getOne($routeParams.id);
  }

})();
