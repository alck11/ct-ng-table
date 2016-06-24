(function () {
  'use strict';
  var InputController = function ($rootScope, CookiejarService) {
    var _this = this;

    _this.categories = [];
    _this.pricePattern = /^\d+\.\d{2}$/;

    _this.addCookie = addCookie;

    activate();

    function addCookie() {
      $rootScope.$broadcast('addCookie', _this.cookie);
      _this.cookie = {};
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
    .controller('InputController', InputController);

  InputController.$inject = ['$rootScope', 'CookiejarService'];
})();