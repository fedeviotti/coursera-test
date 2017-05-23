(function () {

angular.module('MenuApp',['ui.router']);

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/menulist/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menulist/templates/categories.template.html',
      controller: 'MenuListController as menu',
      resolve: {
        categories: ['MenuListService', function (MenuListService) {
          return MenuListService.getMenuCategories();
        }]
      }
    })

    .state('items',{
      url: '/items/{categoryId}',
      templateUrl: 'src/menulist/templates/items.template.html',
      controller: 'ItemController as category',
      resolve: {
        items: ['$stateParams', 'MenuListService', function ($stateParams, MenuListService) {
                return MenuListService.getItemsByCategory($stateParams.categoryId);
              }]
      }
    });
}


})();
