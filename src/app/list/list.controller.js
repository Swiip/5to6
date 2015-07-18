(function() {
  'use strict';

  angular
    .module('5to6')
    .controller('ListController', ListController);

  console.log('define list controller');

  /** @ngInject */
  function ListController(breweryService) {
    var vm = this;

    vm.pageNumber = -1;
    vm.breweries = [];

    console.log('coucou list controller');

    vm.load = function(callback) {
      vm.pageNumber++;
      breweryService.getPage(vm.pageNumber, function(breweries) {
        console.log('coucou');
        vm.breweries = vm.breweries.concat(breweries);
        if(callback) {
          callback();
        }
      });
    };

    vm.load();
  }

})();
