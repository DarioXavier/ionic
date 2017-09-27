(function() {
    'use strict';

    angular
        .module('reposMdle')
        .controller('reposCtrl', reposCtrl);

    reposCtrl.$inject = ['reposSrvc', '$stateParams'];

    function reposCtrl(reposSrvc, $stateParams) {
        var reposCtrl = this;
        reposCtrl.userName = $stateParams.login;
        //reposCtrl.userName = reposCtrl.userName;
        reposCtrl.repoName = reposCtrl.repoName;
        reposCtrl.existInfo = false;
        reposCtrl.userRepos;

        reposCtrl.searchUserRepos = searchUserRepos;
        reposCtrl.filterRepos = filterRepos;

        console.log('$stateParams', $stateParams.login);

        init();


        function init() {
            searchUserRepos();
        }

        function searchUserRepos() {
            existInfo();
            console.log('reposCtrl.userName', reposCtrl.userName);

            if(reposCtrl.userName != undefined && reposCtrl.userName != "") {
                reposSrvc.getUserRepos(reposCtrl.userName)
                    .then(function(resp){
                        console.log('resp', resp);
                        reposCtrl.userRepos = resp;
                        isPrivate();
                        existInfo();
                        console.log('reposCtrl.userRepos', reposCtrl.userRepos);
                    })
            }
        }


        function existInfo(){

            if(reposCtrl.userRepos != undefined && reposCtrl.userName != undefined && reposCtrl.userName != "") {
                reposCtrl.existInfo = true;
            } else {
                reposCtrl.existInfo = false;
            }
        }

        function filterRepos() {

            console.log('reposCtrl.repoName', reposCtrl.repoName);
            angular.forEach(reposCtrl.userRepos, function(repo) {
                if (repo.full_name == reposCtrl.repoName){
                     console.log('igual');
                }
            });
        }

        function isPrivate() {

            angular.forEach(reposCtrl.userRepos, function(repo) {
                if (repo.private == false){
                    repo.public = 'publico'
                } else {
                    repo.public = 'privado'
                }
            });
        }
    }
})();