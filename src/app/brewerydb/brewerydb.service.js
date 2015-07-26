/** @ngInject */
export class BreweryService {
  constructor($q, $http) {
    this.breweryHost = '/brewerydb';

    Object.assign(this, {$q, $http});
  }

  getList() {
    return this.$http.get(`${this.breweryHost}/breweries`)
      .then(result => result.data);
  }

  getOne(id) {
    let brewery;
    return this.$http.get(`${this.breweryHost}/breweries/${id}`)
      .then(resultBrewery => {
        brewery = resultBrewery.data;
        return this.$http.get(`${this.breweryHost}/breweries/${id}/beers`);
      })
      .then(resultBeers => {
        brewery.beers = resultBeers.data;
        return brewery;
      });
  }
}
