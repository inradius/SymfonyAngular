(function ()
{
  'use strict';

  angular
    .module('app.components.error-404', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider)
  {
    $stateProvider.state('404', {
      url: '/404',
      views: {
        'main@': {
          controllerAs: 'vm',
          controller: 'MainController',
          templateUrl: 'app/core/layouts/content-only.html'
        },
        'content@404': {
          controllerAs: 'vm',
          controller: function($state) {
            var vm = this;
            vm.goHome = function() {
              $state.go('application.home');
            };
          },
          templateUrl: 'app/main/components/errors/404/error-404.html'
        }
      },
      bodyClass: 'error-404'
    });
  }

})();
