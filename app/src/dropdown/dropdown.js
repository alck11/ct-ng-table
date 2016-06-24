(function (){
  'use strict';
  var dropdown = function () {
    return {
      scope: {
        type: '=dropdown',
      },
      restrict: 'A',
      templateUrl: 'src/dropdown/dropdown.html',
      replace: true,
      controller: 'DropdownController',
      controllerAs: 'dropdown',
      bindToController: true,
      link: function (scope, element, attributes) {},
    };
  };

  angular
    .module('ctTable')
    .directive('dropdown', [dropdown]);
})();
