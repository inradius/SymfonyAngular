(function ()
{
  'use strict';

  angular
    .module('symfonyApp')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
  {
    $locationProvider.html5Mode(true);

    var layoutStyle = 'verticalLayout';

    var layouts = {
      verticalLayout: {
        main: 'app/core/layouts/vertical.html',
        toolbar: 'app/toolbar/layouts/vertical-navigation/toolbar.html'
      }
    };

    $stateProvider
      .state('application', {
        abstract: true,
        views: {
          'main@': {
            controllerAs: 'vm',
            controller: 'MainController',
            templateUrl: layouts[layoutStyle].main
          }
        }
      });

    $urlRouterProvider.otherwise('/404');
  }

})();
