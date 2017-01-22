/* global angular */
angular.module('ua5App')
    .directive('nav', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/nav/nav.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
