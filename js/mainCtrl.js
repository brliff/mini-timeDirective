/**
 * Created by Brad.Lifferth on 10/8/2016.
 */
angular.module('timeApp').controller('mainCtrl', function($scope) {
    $scope.name = 'Brad';
    $scope.time = new Date();
});