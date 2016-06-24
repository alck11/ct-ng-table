(function () {
  'use strict';
  var CookiejarService = function ($q, $http) {
    var _this = this;

    _this.url = 'http://usweb.dotomi.com/resources/swfs/cookies.json';
    _this.get = get;
    _this.getCookieCategory = getCookieCategory;
    _this.processData = processData;

    function get() {
      var defered = $q.defer();
      $http.get(_this.url).then(function (data) {
        defered.resolve(data);
      }, function(resp) {
        defered.reject('error');
      });
      return defered.promise;
    }

    function getCookieCategory() {
      var defered = $q.defer();
      _this.get().then(function (data) {
        var categories = data.data.map(function (object) {
          return object.category;
        });
        categories = categories.filter(function (element, index) {
          return categories.indexOf(element) == index;
        });
        defered.resolve(categories);
      });
      return defered.promise;
    }

    function processData(data) {
      var processed = [];
      data.forEach(function (element) {
        element.price = parseFloat(element.price.substring(1));
        processed.push(element);
      });
      return processed;
    }
  };

  angular
    .module('ctTable')
    .service('CookiejarService', [
      '$q',
      '$http', CookiejarService]);

  CookiejarService.$inject = ['$q', '$http'];
})();