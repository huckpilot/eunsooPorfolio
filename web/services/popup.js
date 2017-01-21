/* global angular */
angular.module('ua5App')
    .factory('popup', [function() {
        function show(url, width, height) {
            var h;
            var leftPosition;
            var topPosition;
            var w;
            w = width || 600;
            h = height || 600;
            //Allow for borders.
            leftPosition = (window.screen.width / 2) - ((w / 2) + 10);
            //Allow for title and status bars.
            topPosition = (window.screen.height / 2) - ((h / 2) + 50);
            //Open the window.
            window.open(url, 'Window2', 'status=no,height=' + h + ',width=' + w + ',resizable=yes,left=' + leftPosition + ',top=' + topPosition + ',screenX=' + leftPosition + ',screenY=' + topPosition + ',toolbar=no,menubar=no,scrollbars=no,location=no,directories=no');
            return false;
        }
        return {
            show: show
        };
    }])
;
