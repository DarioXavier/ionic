(function(){
    'use strict';

    angular
        .module('reposMdle', [
            
        ])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('app.repos', {
            url: '/repos/:login',
            views: {
                'menuContent': {
                templateUrl: 'js/app/repos/listaRepos/listaRepos.html'
                }
            }
            })

        })

}());