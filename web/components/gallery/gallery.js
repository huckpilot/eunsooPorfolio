/* global angular */
angular.module('ua5App')
    .directive('gallery', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/gallery/gallery.html',
            scope: {
                galleryData: '=',
                navData: '='
            },
            link: function($scope, element, attrs) {
                $scope.masonryOptions = {
                    child: '.media'
                };

                $scope.$on('classChanged', function(event, mass) {
                    console.log('in here fam');
                });
            }
        };
    }])
;
