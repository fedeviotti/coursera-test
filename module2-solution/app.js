(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  toBuy.purchaseItem = function (itemIndex) {
    ShoppingListCheckOffService.purchaseItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy items
  var toBuyItems = [{ name: "cookies", quantity: 10 },
                    { name: "chips",   quantity: 3 },
                    { name: "drinks",  quantity: 5 },
                    { name: "pizzas",  quantity: 8 },
                    { name: "pies",    quantity: 3 },
                    { name: "beer",    quantity: 8 }];
  // List of bought items
  var boughtItems = [];

  service.purchaseItem = function (itemIdex) {
    // add to boughtItems the item removed from toBuyItems
    boughtItems.push(toBuyItems.splice(itemIdex, 1)[0]);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
