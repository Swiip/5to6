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
  /*eslint "angular/ng_module_getter": 0, "angular/ng_di": 0*/
  function AppController($router) {
    $router.config([
      { path: '/', redirectTo: '/list' },
      { path: '/list', component: 'list' },
      { path: '/detail', component: 'detail' },
      { path: '/detail/:id', component: 'detail' }
    ]);
  }

})();
