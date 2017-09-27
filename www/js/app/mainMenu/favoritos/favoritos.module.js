(function(){
    'use strict';

    angular
        .module('favoritosMdle', [
            
        ])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app.favorites', {
        url: '/favorites',
        views: {
            'menuContent': {
            templateUrl: 'js/app/mainMenu/favoritos/favorites.html',
            }
        }
        })
    })

}());