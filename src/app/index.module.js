import angular from 'angular';
import ngAria from 'angular-aria';
import ngTouch from 'angular-touch';
import ngMaterial from 'angular-material';
import ngNewRouter from 'angular-new-router/index';

import { routerConfig, AppController } from './index.routes';
import { ListController } from './list/list.controller';
import { DetailController } from './detail/detail.controller';
import { BreweryService } from './brewerydb/brewerydb.service';

console.log('routerConfig', routerConfig);

angular
  .module('5to6', [ngAria, ngTouch, ngMaterial, ngNewRouter])
  .config(materialConfig)
  .config(routerConfig)
  .controller('AppController', AppController)
  .controller('ListController', ListController)
  .controller('DetailController', DetailController)
  .service('BreweryService', BreweryService);


function materialConfig($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('red');
  $mdThemingProvider.theme('dark')
    .primaryPalette('red')
    .accentPalette('grey');
}
