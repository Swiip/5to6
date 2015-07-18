(function() {
  'use strict';

  angular
    .module('5to6')
    .config(routerConfig)
    .controller('AppController', AppController);

  /** @ngInject */
  function routerConfig($componentLoaderProvider) {
    $componentLoaderProvider.setTemplateMapping(function(name) {
      return 'app/' + name + '/' + name + '.html';
    });
  }

  /** @ngInject */
  function AppController($router) {
    $router.config([
      { path: '/', redirectTo: '/list' },
      { path: '/list', component: 'list' },
      { path: '/detail', component: 'detail' },
      { path: '/detail/:id', component: 'detail' }
    ]);
  }

})();
