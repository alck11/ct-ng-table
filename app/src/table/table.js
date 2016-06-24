(function (){
  'use strict';
  var table = function ()
  {
    return {
      scope: {
        type: '=table',
      },
      restrict: 'A',
      templateUrl: 'src/table/table.html',
      replace: true,
      controller: 'TableController',
      controllerAs: 'table',
      bindToController: true,
      link: function (scope, element, attributes) {},
    };
  };

  angular
    .module('ctTable')
    .directive('table', [table]);
})();
