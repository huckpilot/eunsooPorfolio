/* global angular */
angular.module('ua5App')
    .directive('nav', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/nav/nav.html',
            scope: {
                navData: '='
            },
            link: function($scope, element, attrs) {}
        };
    }])
;
