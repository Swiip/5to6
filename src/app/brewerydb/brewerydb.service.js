export class BreweryService {
  /** @ngInject */
  constructor($q, $log, $http) {
    this.breweryHost = '/brewerydb';

    this.$q = $q;
    this.$log = $log;
    this.$http = $http;
  }

  getList(callback) {
    this.$http.get(this.breweryHost + '/breweries').then((result) => {
      callback(result.data);
    });
  }

  getOne(id, callback) {
    let result;
    this.$http.get(this.breweryHost + '/breweries/' + id).then((resultBrewery) => {
      this.$http.get(this.breweryHost + '/breweries/' + id + '/beers').then((resultBeers) => {
        result = resultBrewery.data;
        result.beers = resultBeers.data;
        callback(result);
      });
    });
  }
}
