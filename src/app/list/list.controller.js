/** @ngInject */
export class ListController {
  constructor($q, BreweryService) {
    Object.assign(this, {$q, BreweryService});
  }

  canActivate() {
    return this.BreweryService.getList()
      .then(breweries => {
        this.breweries = breweries;
      });
  }
}
