(function() {
  'use strict';

  /** @ngInject */
  function BreweryService($q, $log, $http) {
    var breweryHost = '/brewerydb';

    var service = {
      breweryHost: breweryHost,
      getList: getList,
      getOne: getOne
    };

    return service;

    function getList(callback) {
      $http.get(breweryHost + '/breweries').then(function(result) {
        callback(result.data);
      });
    }

    function getOne(id, callback) {
      var result;
      $http.get(breweryHost + '/breweries/' + id).then(function(resultBrewery) {
        $http.get(breweryHost + '/breweries/' + id + '/beers').then(function(resultBeers) {
          result = resultBrewery.data;
          result.beers = resultBeers.data;
          callback(result);
        });
      });
    }
  }

  angular
    .module('5to6')
    .factory('BreweryService', BreweryService);

})();
