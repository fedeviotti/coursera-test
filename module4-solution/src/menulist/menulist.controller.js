(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuListController', MenuListController);


MenuListController.$inject = ['MenuListService', 'categories'];
function MenuListController(MenuListService, categories) {
  var menu = this;
  menu.categories = categories.data;
}


})();
