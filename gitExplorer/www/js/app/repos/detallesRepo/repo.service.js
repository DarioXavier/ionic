(function() {
    'use strict';

    angular
        .module('repoMdle')
        .factory('repoSrvc', repoSrvc);

    repoSrvc.$inject = ['$http'];

    function repoSrvc($http) {

        return {
            getUserRepos: getUserRepos
        }
        
        ////////////////

        function getUserRepos(userName) {
            var apiUrl = 'https://api.github.com/users/'+userName+'/repos';
            
            console.log('apiUrl', apiUrl);

            return $http.get(apiUrl)
            .then(function(res){
                return res.data;
            })
            .catch(function(err){
                console.log('error');
                if(err.status === 404){
                    console.log('No existe el repo!');
                }
            });
        }
    }
})();