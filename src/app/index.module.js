(function() {
  'use strict';

  angular
    .module('5to6', ['ngAria', 'ngTouch', 'ngMaterial', 'ngNewRouter'])
    .config(materialConfig);

  function materialConfig($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('grey')
      .accentPalette('red');
    $mdThemingProvider.theme('dark')
      .primaryPalette('red')
      .accentPalette('grey');
  }

})();
