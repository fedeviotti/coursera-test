(function () {
"use strict";

angular.module('public').
controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['UserService'];
function RegistrationController(UserService) {
  var reg = this;
  reg.user = {};
  reg.user.dish = '';
  reg.message = '';
  reg.item = {};


  reg.submit = function () {

    UserService.registerUser(reg.user);

    var promise = UserService.getDish(reg.user.dish);

    promise.then(function (response) {
      reg.item= response.data;
      reg.message = 'Your information has been saved';
      UserService.registerUser(reg.user);
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
      reg.message = 'No such menu number exists';
    });

  };

}

})();
