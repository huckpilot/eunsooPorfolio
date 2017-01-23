/* global angular */
angular.module('ua5App')
    .directive('nav', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/nav/nav.html',
            scope: {
                navData: '='
            },
            link: function($scope, element, attrs) {
                $scope.bigNav = 'nav--big';

                $scope.changeClass = function() {
                    if ($scope.bigNav === 'nav--big') {
                        $scope.bigNav = '';
                    } else {
                        $scope.bigNav = 'nav--big';
                    }
                };
            }
        };
    }])
;
