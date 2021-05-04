// var app = angular.module('clock', []);

//   app.controller("digitalClock", function($timeout, dateFilter) {
//     return {
//       restrict: 'E',
//       link: function(scope, iElement) {
//         (function updateClock() {
//           iElement.text(dateFilter(new Date(), 'H:mm:ss'));
//           $timeout(updateClock, 1000);
//         })();
//       }
//     };
//   });

var module = angular.module('clock', []);

module.controller('digitalClock', function($scope, $interval) {
  var tick = function() {
    $scope.clock = Date.now();
  }
  tick();
  $interval(tick, 1000);
});