/* global angular, TweenMax, $ */
angular.module('ua5App')
    .directive('nav', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/nav/nav.html',
            scope: {
                bar: '='
            },
            link: function($scope, element, attrs) {

                var $$background;
                $$background = $('.nav__background', $(element));

                $scope.colorStyling = 'home.category({ slug: "color-styling" })';
                $scope.background = 'home.category({ slug: "background" })';
                $scope.sketchBook = 'home.category({ slug: "sketchbook" })';
                $scope.comics = 'home.category({ slug: "comics" })';
                $scope.threeD = 'home.category({ slug: "3d" })';
                $scope.sculpture = 'home.category({ slug: "sculpture" })';

                $scope.overlayOn = function() {
                    TweenMax.to($$background, 0.3, {
                        opacity: 1
                    });
                };
                $scope.overlayOff = function() {
                    TweenMax.to($$background, 0.3, {
                        opacity: 0
                    });
                };
            }
        };
    }])
;
