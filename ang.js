var module = angular.module('clock', []);

module.controller('digitalClock', function($scope, $interval) {
    // counts 100 sec
    $scope.CountDown = 100;
    $interval(function () {
        if ($scope.CountDown > 0) {
            $scope.CountDown--;
        }
    }, 1000, 0);
});