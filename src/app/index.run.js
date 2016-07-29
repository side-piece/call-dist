(function() {
  'use strict';

  angular
    .module('callDist')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
