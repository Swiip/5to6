export class ListController {
  /** @ngInject */
  constructor($q, BreweryService) {
    this.$q = $q;
    this.BreweryService = BreweryService;
  }

  canActivate() {
    return this.$q((resolve) => {
      return this.BreweryService.getList((breweries) => {
        this.breweries = breweries;
        resolve();
      });
    });
  }
}
