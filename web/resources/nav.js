/* global angular */
angular.module('ua5App')
    .factory('navResource', ['contentful', 'LocaleService', '$q', function(contentful, LocaleService, $q) {
        var d;
        var initialized;
        d = $q.defer();
        return {
            get: function(id) {
                if (!initialized) {
                    initialized = true;
                    contentful.entries('content_type=nav&locale=' + LocaleService.get()).then(function(response) {
                        d.resolve(response.data.items);
                    });
                }
                return d.promise;
            }
        };
    }])
;
