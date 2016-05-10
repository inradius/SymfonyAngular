(function ()
{
  'use strict';

  angular
    .module('app.core')
    .config(config);

  /** @ngInject */
  function config($logProvider)
  {
    $logProvider.debugEnabled(true);
  }
})();
