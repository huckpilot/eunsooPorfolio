/* global angular, _ */
angular.module('ua5App.home.category')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home.category', {
            url: ':slug',
            templateUrl: 'states/home.category/home.category.html',
            controller: 'homeCategoryCtrl',
            controllerAs: 'ctrl'
        });
    }])
    .controller('homeCategoryCtrl', ['$stateParams', '$scope', 'nav', function($stateParams, $scope, nav) {
        $scope.currentNav = _.find(nav, function(nav) {
            $scope.category = 'home-category__' + nav.fields.slug;
            return nav.fields.slug === $stateParams.slug;
        });
    }])
;
