(function ()
{
  'use strict';

  var inputForm = function ()
  {
    return {
      restrict: 'A',
      templateUrl: 'src/input/input.html',
      replace: true,
      controller: 'InputController',
      controllerAs: 'input',
      bindToController: true,
      link: function (scope, element, attributes) {},
    };
  };

  angular
    .module('ctTable')
    .directive('inputForm', [inputForm]);
})();
