(function () {
  'use strict';
  var TableService = function (CookiejarService) {
    var _this = this;

    _this.get = get;

    function get() {
      CookiejarService.getCookie()
        .then(function (data) {
          console.log(data);
        });
    }

  };
  angular
    .module('ctTable')
    .service('TableService', [
      'CookiejarService', TableService]);
})();