(function () {
  'use strict';
  var DropdownController = function ($rootScope, CookiejarService) {
    var _this = this;

    _this.categories = [];
    _this.changeCategory = changeCategory;

    activate();

    function changeCategory() {
      $rootScope.$broadcast('updateTable', _this.category);
    }

    function activate() {
      CookiejarService.getCookieCategory().then(function (data) {
        data.forEach(function (element) {
          _this.categories.push({ id: element, name: element });
        });
      });
    }
  };

  angular
    .module('ctTable')
    .controller('DropdownController', DropdownController);

  DropdownController.$inject = ['$rootScope', 'CookiejarService'];
})();