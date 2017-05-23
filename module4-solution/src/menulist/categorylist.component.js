(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'src/menulist/templates/categorylist.template.html',
  bindings: {
    categories: '<'
  }
});

})();
