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
                var $$sectionTitle;
                var currentTitle;

                $scope.number = 5;
                $scope.alternative = false;
                $$background = $('.nav__background', $(element));
                $$sectionTitle = $('.nav__menu__item__text', $(element));

                $scope.colorStyling = {
                    name: 'Color styling',
                    slug: 'home.category({ slug: "color-styling" })'
                };
                $scope.backgrounds = {
                    name: 'Backgrounds',
                    slug: 'home.category({ slug: "backgrounds" })'
                };
                $scope.sketchBook = {
                    name: 'Sketch book',
                    slug: 'home.category({ slug: "sketchbook" })'
                };
                $scope.comics = {
                    name: 'Comics',
                    slug: 'home.category({ slug: "comics" })'
                };
                $scope.threeD = {
                    name: '3D',
                    slug: 'home.category({ slug: "3d" })'
                };
                $scope.sculpture = {
                    name: 'Sculpture',
                    slug:'home.category({ slug: "sculpture-prop-making" })'
                };

                $scope.setTitle = function(name) {
                    currentTitle = $scope.sectionTitle;
                    $scope.sectionTitle = name;

                    TweenMax.set($$sectionTitle, {
                        opacity: 1
                    });
                    TweenMax.to($$sectionTitle, 1, {
                        opacity: 0.1
                    });
                };

                $scope.previewTitle = function(name) {
                    $scope.sectionTitle = name;
                    TweenMax.set($$sectionTitle, {
                        opacity: 1
                    });
                };

                $scope.revertTitle = function() {
                    $scope.sectionTitle = currentTitle;
                    TweenMax.set($$sectionTitle, {
                        opacity: 0.1
                    });
                };

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
