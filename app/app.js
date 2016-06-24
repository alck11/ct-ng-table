(function() {
  'use strict';

  var config = function ($httpProvider, $compileProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = 'Content-Type: application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $compileProvider.debugInfoEnabled(false);
  };

  angular
    .module('ctTable', [
      'ngSanitize',
    ])
    .config(['$httpProvider',
      '$compileProvider',
      config,]);
})();