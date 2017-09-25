(function() {
    'use strict';

    angular
        .module('buscadorMdle')
        .factory('buscadorSrvc', buscadorSrvc);

    buscadorSrvc.$inject = ['$http'];

    function buscadorSrvc($http) {

        return {
            getGitUsers: getGitUsers
        }
        
        ////////////////

        function getGitUsers(userName) {
            var apiUrl = 'https://api.github.com/search/users?q='+userName+'+in:login';
            
            console.log('apiUrl', apiUrl);

            return $http.get(apiUrl)
            .then(function(res){
                return res.data.items;
            })
            .catch(function(err){
                console.log('error');
                if(err.status === 404){
                    console.log('No existe el usuario!');
                }
            });
        }
    }
})();