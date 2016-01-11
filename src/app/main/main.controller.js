(function() {
  'use strict';

  angular
    .module('electitweet')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout) {
    var vm = this;

    vm.classAnimation = '';
    vm.creationDate = 1451935050197;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }
  }
})();
