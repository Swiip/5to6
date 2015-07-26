export class DetailController {
  /** @ngInject */
  constructor($q, $routeParams, BreweryService) {
    Object.assign(this, {$q, $routeParams, BreweryService});
  }

  canActivate() {
    return this.BreweryService.getOne(this.$routeParams.id)
      .then(brewery => {
        this.brewery = brewery;
      });
  }
}
