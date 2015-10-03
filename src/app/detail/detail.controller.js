export class DetailController {
  /** @ngInject */
  constructor($q, $routeParams, BreweryService) {
    this.$q = $q;
    this.$routeParams = $routeParams;
    this.BreweryService = BreweryService;
  }

  canActivate() {
    return this.$q((resolve) => {
      return this.BreweryService.getOne(this.$routeParams.id, (brewery) => {
        this.brewery = brewery;
        resolve();
      });
    });
  }
}
