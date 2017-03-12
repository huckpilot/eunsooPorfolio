/* global angular, $ */
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

                $scope.alternative = false;
                $$background = $('.nav__background', $(element));

                $scope.colorStyling = 'home.category({ slug: "color-styling" })';
                $scope.backgrounds = 'home.category({ slug: "backgrounds" })';
                $scope.sketchBook = 'home.category({ slug: "sketchbook" })';
                $scope.comics = 'home.category({ slug: "comics" })';
                $scope.threeD = 'home.category({ slug: "3d" })';
                $scope.sculpture = 'home.category({ slug: "sculpture" })';

                $scope.changeClass = function() {
                    if (!$scope.alternative) {
                        $scope.alternative = true;
                    } else {
                        $scope.alternative = false;
                    }
                };
            }
        };
    }])
;
