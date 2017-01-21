/* global angular, ScrollReveal */
angular.module('ua5App')
    .directive('scrollReveal', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                scrollRevealSettings: '='
            },
            link: function($scope, element, attrs) {
                $timeout(function() {
                    if (!window.scrollReveal) {
                        window.scrollReveal = new ScrollReveal();
                    }
                    window.scrollReveal.reveal(element, $scope.scrollRevealSettings);
                }, 0);
            }
        };
    }])
;
