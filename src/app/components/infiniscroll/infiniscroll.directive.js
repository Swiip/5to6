(function() {
  'use strict';

  angular
    .module('5to6')
    .directive('acmeInfiniscroll', acmeInfiniscroll);

  /** @ngInject */
  function acmeInfiniscroll($parse) {

    var directive = {
      link: link
    };

    return directive;

    function link(scope, element, attributes) {
      var load = $parse(attributes.acmeInfiniscroll);
      var listen = true;

      window.addEventListener('scroll', checkScroll);
      checkScroll();

      function checkScroll() {
        if(!listen) {
          return;
        }

        var lastChild = element[0].querySelector('md-grid-tile:last-child');

        var $callback = function() {
          listen = false;
        };

        if(lastChild === null || lastChild.offsetTop < document.body.scrollTop + document.body.clientHeight) {
          listen = false;
          load(scope, {$callback: $callback} );
        }
      }
    }
  }
})();
