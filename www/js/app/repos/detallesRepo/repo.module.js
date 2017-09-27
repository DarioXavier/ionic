(function() {
    'use strict';

    angular
        .module('repoMdle', [])

        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
            .state('app.repo', {
            url: '/repo/:login/:repoName',
            views: {
                'menuContent': {
                templateUrl: 'js/app/repos/detallesRepo/repo.html'
                }
            }
            })
        })
})();