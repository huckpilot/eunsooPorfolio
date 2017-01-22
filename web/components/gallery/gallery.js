/* global angular */
angular.module('ua5App')
    .directive('gallery', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/gallery/gallery.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
