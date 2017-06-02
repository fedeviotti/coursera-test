(function () {
"use strict";

angular.module('public').
controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService', 'ApiPath'];
function MyInfoController(UserService, ApiPath) {
  var myinfo = this;
  myinfo.basePath = ApiPath;

  myinfo.user = UserService.getUser();

  var promise = UserService.getDish(myinfo.user.dish?myinfo.user.dish:'');

  promise.then(function (response) {
    myinfo.dishdetail= response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

}

})();
