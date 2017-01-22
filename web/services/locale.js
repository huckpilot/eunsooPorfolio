/* global angular */
angular.module('ua5App')
    .factory('LocaleService', ['LOCALES', function(LOCALES) {
        var locale = LOCALES.preferredLocale;
        function get() {
            return locale;
        }
        function set(lang) {
            var browserLang = lang || window.navigator.language;
            if (browserLang in LOCALES.locales) {
                locale = LOCALES.locales[browserLang];
            }
        }
        return {
            get: get,
            set: set
        };
    }])
;
