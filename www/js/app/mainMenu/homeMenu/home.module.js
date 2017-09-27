(function() {
    'use strict';

    angular
        .module('homeMdle', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('app.home', {
            url: '/home',
            views: {
                'menuContent': {
                templateUrl: 'js/app/mainMenu/homeMenu/home.html',
                }
            }
            })
        })


})();