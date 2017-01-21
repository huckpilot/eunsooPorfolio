/* global angular */
angular.module('ua5App')
    .directive('shareE', ['$location', function($location) {
        return {
            restrict: 'A',
            scope: {
                shareEBody: '@',
                shareESubject: '@'
            },
            link: function($scope, element, attrs) {
                var body;
                var subject;
                body = $scope.shareEBody || $location.absUrl();
                subject = $scope.shareESubject || $location.absUrl();
                element[0].href = 'mailto:?subject=' + subject + '&body=' + body;
                element[0].target = '_blank';
            }
        };
    }])
;
