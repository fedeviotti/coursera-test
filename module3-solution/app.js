(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    }
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var searchCtrl = this;

  searchCtrl.searchTerm = '';
  searchCtrl.warning = ''

  searchCtrl.searchInMenu = function () {

    if (searchCtrl.searchTerm.trim() != ''){
      var promise = MenuSearchService.getMatchedMenuItems(searchCtrl.searchTerm);

      promise.then(function (response) {
        searchCtrl.found = response;
      })
      .catch(function (error) {
        console.log(error);
      })
    }else{
      searchCtrl.warning = 'Nothing found';
    }

  };

  searchCtrl.removeItem = function (itemIndex) {
    searchCtrl.found.splice(itemIndex,1);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var foundItems = [];

      for (var i = 0; i < result.data.menu_items.length; i++) {
        var description = result.data.menu_items[i].description;
        if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          foundItems.push(result.data.menu_items[i]);
        }
      }
      return foundItems;
    });
  };

}

})();
