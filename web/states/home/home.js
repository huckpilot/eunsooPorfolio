/* global angular */
angular.module('ua5App.home')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'states/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'ctrl',
            resolve: {
                nav: ['navResource', function(navResource) {
                    return navResource.get().then(function(response) {
                        return response;
                    });
                }],
                page: ['PageNavResource', function(PageNavResource) {
                    return PageNavResource.then(function(response) {
                        return response.data.items[0].fields;
                    });
                }]
            }
        });
    }])
    .controller('HomeCtrl', ['$scope', 'page', 'nav', function($scope, page, nav) {
        $scope.nav = nav;
        $scope.page = page;
    }])
;
