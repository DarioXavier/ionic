(function() {
    'use strict';

    angular
        .module('repoMdle')
        .factory('repoSrvc', repoSrvc);

    repoSrvc.$inject = ['$http'];

    function repoSrvc($http) {
        var API = 'https://api.github.com/repos/';

        return {
            getUserRepo: getUserRepo,
            getRepoContributors : getRepoContributors,
            getRepoBranches : getRepoBranches,
            getRepoCommits : getRepoCommits
        }
        
        ////////////////

        function getUserRepo(userName, repoName) {
            var apiUrl = API+userName+'/'+repoName;
            
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

        function getRepoContributors(userName, repoName) {
            var apiUrl = API+userName+'/'+repoName+'/contributors';
            
            console.log('apiUrl', apiUrl);

            return $http.get(apiUrl)
            .then(function(res){
                return res.data;
            })
            .catch(function(err){
                console.log('error');
                if(err.status === 404){
                    console.log('No existen contribuidores!');
                }
            });
        }

        function getRepoBranches(userName, repoName) {
            var apiUrl = API+userName+'/'+repoName+'/branches';
            
            console.log('apiUrl', apiUrl);

            return $http.get(apiUrl)
            .then(function(res){
                return res.data;
            })
            .catch(function(err){
                console.log('error');
                if(err.status === 404){
                    console.log('No existen ramas!');
                }
            });
        }

        function getRepoCommits(userName, repoName) {
            var apiUrl = API+userName+'/'+repoName+'/commits';
            
            console.log('apiUrl', apiUrl);

            return $http.get(apiUrl)
            .then(function(res){
                return res.data;
            })
            .catch(function(err){
                console.log('error');
                if(err.status === 404){
                    console.log('No existen commits!');
                }
            });
        }
    }
})();