/* global angular */
angular.module('ua5App')
    .directive('shareFb', ['popup', '$location', function(popup, $location) {
        return {
            restrict: 'A',
            scope: {
                shareFbUrl: '@'
            },
            link: function($scope, element, attrs) {
                var url;
                var fbUrl;
                url = $scope.shareFbUrl || $location.absUrl();
                fbUrl = 'https://www.facebook.com/sharer.php?u=' + encodeURIComponent(url);
                element.on('click', function() {
                    popup.show(fbUrl);
                });
                $scope.$on('$destroy', function() {
                    element.off('click');
                });
            }
        };
    }])
;
