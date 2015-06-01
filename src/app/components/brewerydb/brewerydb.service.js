(function() {
  'use strict';

  angular
    .module('5to6')
    .factory('breweryService', breweryService);

  /** @ngInject */
  function breweryService($q, $log, $http) {
    var breweryHost = '/v2';
    var colors = ['green', 'yellow', 'blue', 'darkBlue', 'deepBlue', 'purple', 'lightPurple', 'red', 'pink'];

    var service = {
      breweryHost: breweryHost,
      getPage: getPage
    };

    return service;

    function getPage(pageNumber, callback) {
      $http.get(breweryHost + '/breweries?key=7aad83e6736ab4971caf36328b47fb52&hasImages=Y&name=*&p=' + pageNumber)
        .then(function(data) {
          callback(data.data.data.map(function(brewery) {
            brewery.background = randomChoice(colors);
            brewery.rowspan = 1 + Math.random() * 10 / 9 | 0;
            brewery.colspan = 1 + Math.random() * 10 / 9 | 0;
            return brewery;
          }));
        })
        .catch(function (error) {
          $log.error('XHR Failed for getBreweries.\n' + angular.toJson(error.data, true));
        });
    }

    function randomChoice(array) {
        return array[Math.random() * array.length | 0];
    }
  }
})();
