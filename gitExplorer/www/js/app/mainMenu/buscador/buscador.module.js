(function(){
    'use strict';

    angular
        .module('buscadorMdle', [
            
        ])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
            templateUrl: 'js/app/mainMenu/buscador/search.html'
            }
        }
        })

    })


}());