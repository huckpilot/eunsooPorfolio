/* global angular */
angular.module('ua5App')
    .factory('PageNavResource', ['contentful', 'LocaleService', function(contentful, LocaleService) {
        return contentful.entries('sys.id=3qgFp0m74coKwMCS2q6Msk&locale=' + LocaleService.get());
    }])
;
