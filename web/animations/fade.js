/* global angular, TweenMax, Quint */
angular.module('ua5App')
    // Fade out old state then fade in the new state
    .animation('.fade', [function() {
        var FADE_SPEED = 0.5;
        return {
            enter: function(element, doneFn) {
                TweenMax.to(element, FADE_SPEED, {
                    delay: FADE_SPEED,
                    alpha: 1,
                    onComplete: function() {
                        TweenMax.set(element, {
                            position: 'static'
                        });
                        doneFn();
                    },
                    ease: Quint.easeInOut
                });
            },
            leave: function(element, doneFn) {
                TweenMax.to(element, FADE_SPEED, {
                    alpha: 0,
                    onComplete: function() {
                        document.body.scrollTop = 0;
                        document.documentElement.scrollTop = 0;
                        doneFn();
                    },
                    ease: Quint.easeInOut
                });
            }
        };
    }])
;
