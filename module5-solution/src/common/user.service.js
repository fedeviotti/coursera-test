(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


UserService.$inject = ['$http', 'ApiPath'];
function UserService($http, ApiPath) {
  var service = this;
  service.user = {};

  service.getDish = function (dish) {

    return $http({
      method: "GET",
      url: (ApiPath + '/menu_items/'+ dish.toUpperCase() + ".json")
    });

  };

  service.registerUser = function (user) {
    service.user = user;
  };

  service.getUser = function () {
    return service.user;
  };

}

})();
