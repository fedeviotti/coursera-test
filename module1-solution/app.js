(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope', "$filter"];

function LunchCheckController($scope, $filter) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.check = function () {

    if ($scope.lunchMenu === ""){
      $scope.message = "Please enter data first";
    }else{
      var array = $scope.lunchMenu.split(',');
      if(array.length <= 3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!"
      }
    }
  };
}

})();
