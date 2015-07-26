/** @ngInject */
export class BreweryService {
  constructor($http) {
    Object.assign(this, { $http, breweryHost: '/brewerydb' });
  }

  async getList() {
    let result = await this.$http.get(`${this.breweryHost}/breweries`);
    return result.data;
  }

  async getOne(id) {
    let resultBrewery = await this.$http.get(`${this.breweryHost}/breweries/${id}`);
    let brewery = resultBrewery.data;
    let resultBeers = await this.$http.get(`${this.breweryHost}/breweries/${id}/beers`);
    brewery.beers = resultBeers.data;
    return brewery;
  }
}
