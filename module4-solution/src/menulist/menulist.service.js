(function () {
'use strict';

angular.module('MenuApp')
.service('MenuListService', MenuListService);


MenuListService.$inject = ['$http', 'ApiBasePath'];
function MenuListService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };

  service.getItemsByCategory = function (categoryId) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryId)
    });

    return response;
  };

}

})();
