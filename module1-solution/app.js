(function () {
  'use strict';

angular.module('LunchCheck', [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope', "$filter"];

function LunchCheckController($scope, $filter) {
  $scope.lunchMenu = "";
  $scope.message = "";
  $scope.fontColor = "";

  $scope.check = function () {

    if ($scope.lunchMenu === ""){
      $scope.message = "Please enter data first";
      $scope.fontColor = "red";
    }else{
      var array = $scope.lunchMenu.split(',');
      //filter to do NOT consider and empty item towards to the count
      array = array.filter(function(n){ return n.trim() != "" });
      $scope.fontColor = "green";
      //in case of only commas
      if (array.length == 0){
        $scope.message = "Please enter data first";
        $scope.fontColor = "red";
      }else if(array.length <= 3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!"
      }
    }
  };
}

})();
