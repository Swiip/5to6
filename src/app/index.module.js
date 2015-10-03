import { ListController } from './list/list.controller';
import { DetailController } from './detail/detail.controller';
import { BreweryService } from './brewerydb/brewerydb.service';

angular
  .module('5to6', ['ngAria', 'ngTouch', 'ngMaterial', 'ngNewRouter'])
  .controller('ListController', ListController)
  .controller('DetailController', DetailController)
  .service('BreweryService', BreweryService);
