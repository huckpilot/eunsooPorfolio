/* global angular */
angular.module('ua5App')
    .directive('nav', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/nav/nav.html',
            scope: {
                navData: '=',
                bar: '='
            },
            link: function($scope, element, attrs) {
                $scope.bigNav = 'nav--big';
                $scope.bar = false;

                $scope.changeClass = function() {
                    if (!$scope.bar) {
                        $scope.bar = true;
                    } else {
                        $scope.bar = false;
                    }
                };
            }
        };
    }])
;
