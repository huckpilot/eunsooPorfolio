/* global angular, $, TweenMax, _ */
angular.module('ua5App')
    .directive('masonry', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                masonryOptions: '='
            },
            link: function($scope, element, attrs) {
                console.log($scope.masonryOptions);
                var ITEM_SELECTOR = '.masonry__item';
                var $element = $(element);
                // Applies masonry layout. Throttled because this is a
                // recursive function and we want to avoid a stack overflow.
                // Requires a child selector to be passed into masonry-
                // options. This is necessary to ensure that the nested
                // directive gets loaded on the page BEFORE imagesloaded tries
                // running. Without this, sometimes masonry will attempt to
                // layout items before the items are actually in the DOM.
                var applyMasonry = _.throttle(function() {
                    if ($element.find($scope.masonryOptions.child).length === $element.children().length) {
                        $element.imagesLoaded(function() {
                            // Init masonry
                            $element.masonry({
                                itemSelector: ITEM_SELECTOR,
                                columnWidth: ITEM_SELECTOR,
                                percentPosition: true,
                                transitionDuration: 0
                            });
                            TweenMax.set($element, {
                                opacity: 1
                            });
                        });
                    } else {
                        applyMasonry();
                    }
                }, 250);
                // Wrap in timeout to ensure that img src has been populated
                // by angular prior to using `imagesLoaded`
                $timeout(function() {
                    applyMasonry();
                });
            }
        };
    }])
;
