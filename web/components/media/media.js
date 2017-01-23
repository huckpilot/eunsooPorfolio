/* global angular */
angular.module('ua5App')
    .directive('media', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/media/media.html',
            scope: {
                media: '='
            },
            link: function($scope, element, attrs) {
                console.log($scope.media);
                console.log('gg');
            }
        };
    }])
;
