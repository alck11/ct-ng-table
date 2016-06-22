(function() {
  'use strict';

  var config = function($httpProvider, $compileProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = 'Content-Type: application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $compileProvider.debugInfoEnabled(false);
  };

  var run = function($rootScope) {};

  angular
    .module('ctTable', [
      'ngSanitize',
    ])
    .config(['$httpProvider',
      '$compileProvider',
      config,])
    .run(['$rootScope',
      run]);
})();