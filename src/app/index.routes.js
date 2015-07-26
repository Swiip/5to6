/** @ngInject */
export function routerConfig($componentLoaderProvider) {
  'use strict';
  $componentLoaderProvider.setTemplateMapping(function(name) {
    return `app/${name}/${name}.html`;
  });
}

/** @ngInject */
/*eslint "angular/ng_module_getter": 0, "angular/ng_di": 0*/
export class AppController {
  constructor($router) {
    $router.config([
      { path: '/', redirectTo: '/list' },
      { path: '/list', component: 'list' },
      { path: '/detail', component: 'detail' },
      { path: '/detail/:id', component: 'detail' }
    ]);
  }
}
