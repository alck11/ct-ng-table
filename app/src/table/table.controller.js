(function () {
  'use strict';
  var TableController = function ($rootScope, CookiejarService) {
    var _this = this;

    _this.sortType = null;
    _this.sortReverse = false;
    _this.cookieCategory = '';

    $rootScope.$on('addCookie', addCookie);
    $rootScope.$on('updateTable', updateTable);

    activate();

    function activate() {
      CookiejarService.get().then(function (data) {
        _this.cookieJar = CookiejarService.processData(data.data);
        _this.cookieKey = Object.keys(_this.cookieJar[0]);
      });
    }

    function addCookie(event, arg) {
      arg.price = parseFloat(arg.price);
      _this.cookieJar.push(arg);
    }

    function updateTable(event, arg) {
      if (arg === null) {
        _this.cookieCategory = '';
      } else {
        _this.cookieCategory = arg;
      }
    }

  };

  angular
    .module('ctTable')
    .controller('TableController', TableController);

  TableController.$inject = ['$rootScope', 'CookiejarService'];
})();