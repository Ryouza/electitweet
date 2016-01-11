(function() {
  'use strict';

  angular
    .module('electitweet')
    .directive('tweetMap', ['$compile', function ($compile) {
      return {
          restrict: 'EA',
          templateUrl: 'assets/images/map.svg',
          link: function (scope, element, attrs) {
              var regions = element[0].querySelectorAll('.state');
              angular.forEach(regions, function (path, key) {
                  var regionElement = angular.element(path);
                  regionElement.attr("region", "");
                  $compile(regionElement)(scope);
              })
          }
      }
    }])
    .directive('region', ['$compile', function ($compile) {
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
              scope.elementId = element.attr("id");
              scope.regionClick = function () {
                  alert(elementId);
              };
              element.attr("ng-click", "regionClick()");
              element.removeAttr("region");
              $compile(element)(scope);
          }
      }
    }]);
})();
