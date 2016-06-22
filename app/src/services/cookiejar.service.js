(function () {
  'use strict';
  var CookiejarService = function ($q, $http) {
    var _this = this;

    _this.url = 'http://usweb.dotomi.com/resources/swfs/cookies.json';
    _this.get = get;

    function get() {
      var defered = $q.defer();
      $http.get(_this.url).then(function(data) {
        defered.resolve(data);
      }, function(resp) {
        defered.reject('error');
      });
      return defered.promise;
    }

  };
  angular
    .module('ctTable')
    .service('CookiejarService', [
      '$q',
      '$http', CookiejarService]);
})();