(function() {
  'use strict';

  console.log('from angular');

  navigator.serviceWorker.register('service-worker.js');

  angular
    .module('5to6', ['ngAria', 'ngTouch', 'ngMaterial']);

})();
