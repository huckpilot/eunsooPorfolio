/* global angular */
angular.module('ua5App')
    .directive('shareTw', ['popup', '$location', function(popup, $location) {
        return {
            restrict: 'A',
            scope: {
                shareTwUrl: '@',
                shareTwText: '@'
            },
            link: function($scope, element, attrs) {
                var text;
                var twUrl;
                var url;
                url = $scope.shareTwUrl || $location.absUrl();
                text = $scope.shareTwText || '';
                twUrl = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url;
                element.on('click', function() {
                    popup.show(twUrl, 600, 253);
                });
                $scope.$on('$destroy', function() {
                    element.off('click');
                });
            }
        };
    }])
;
