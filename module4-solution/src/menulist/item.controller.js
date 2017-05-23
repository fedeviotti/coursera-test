(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);


ItemController.$inject = ['items'];
function ItemController(items) {
  var category = this;
  category.categoryTitle = items.data.category.name;
  category.items = items.data.menu_items;
}



})();
