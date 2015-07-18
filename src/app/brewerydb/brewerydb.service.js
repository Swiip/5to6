(function() {
  'use strict';

  angular
    .module('5to6')
    .factory('breweryService', breweryService);

  /** @ngInject */
  function breweryService($q, $log, $http) {
    var breweryHost = '/v2';
    var breweries = null;

    var service = {
      breweryHost: breweryHost,
      getPage: getPage,
      getOne: getOne
    };

    return service;

    function getPage(pageNumber, callback) {
      console.log('get page');
      $http.get(breweryHost + '/breweries?key=7aad83e6736ab4971caf36328b47fb52&hasImages=Y&name=*&p=' + pageNumber)
        .then(function(data) {
          breweries = data.data.data.map(function(brewery) {
            return brewery;
          });
          callback(breweries);
        })
        .catch(function (error) {
          $log.error('XHR Failed for getBreweries.\n' + angular.toJson(error.data, true));
        });
    }

    function getOne(id, callback) {
      var oneBrewery = breweries.filter(function(brewery) {
        return brewery.id === id;
      });
      return oneBrewery[0];
    }
  }
})();
