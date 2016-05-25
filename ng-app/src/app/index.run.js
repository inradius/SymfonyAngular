(function ()
{
  'use strict';

  angular
    .module('symfonyApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state)
  {
    $rootScope.state = $state;
  }
})();
