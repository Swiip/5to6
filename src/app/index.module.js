(function() {
  'use strict';

  console.log('from angular');

  //navigator.serviceWorker.register('service-worker.js');

  angular
    .module('5to6', ['ngAria', 'ngTouch', 'ngMaterial', 'ngNewRouter'])
    .config(materialConfig);

  function materialConfig($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('red');
    $mdThemingProvider.theme('dark')
      .primaryPalette('red');
  }

})();


/********************
cFBlWc //Chimay
5ac2lB //Leffe
huKquc //Maredsous
KE3f43 //Rochefort
QkdgSV //Affligem

*********************/
