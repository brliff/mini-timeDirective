/**
 * Created by Brad.Lifferth on 10/8/2016.
 */
angular.module('timeApp').directive('showTime', function() {
    return {
        restrict: 'E',
        template: '<div> The current time is {{time}} </div>',
        link: function (scope, element, attrs) {

            scope.time = new Date().toString();
        }
    };
});