(function() {
    'use strict';

    angular
        .module('repoMdle')
        .controller('repoCtrl', repoCtrl);

    repoCtrl.$inject = ['repoSrvc', '$stateParams'];

    function repoCtrl(repoSrvc, $stateParams) {
        var repoCtrl = this;
        repoCtrl.userName = $stateParams.login;
        repoCtrl.repoName = $stateParams.repoName;
        repoCtrl.repoData;

        repoCtrl.getUserRepo;
        repoCtrl.isPrivate;
        repoCtrl.getRepoContributors;
        repoCtrl.getRepoBranches;
        repoCtrl.getRepoCommits;

        init();


        function init() {
            console.log('repoCtrl.userName', repoCtrl.userName);
            console.log('repoCtrl.repoName', repoCtrl.repoName);
            getUserRepo();
            getRepoContributors ();
            //getRepoBranches();
            //getRepoCommits();
        }


        function getUserRepo() {

            if(repoCtrl.userName != undefined && repoCtrl.userName != "") {
                repoSrvc.getUserRepo(repoCtrl.userName, repoCtrl.repoName)
                    .then(function(resp){
                        console.log('getUserRepo', resp);
                        repoCtrl.repoData = resp;
                        isPrivate();
                        console.log('repoCtrl.repoData', repoCtrl.repoData);
                    })
            }
        }


        function isPrivate() {

            if (repoCtrl.repoData.private == false){
                repoCtrl.repoData.public = 'publico'
            } else {
                repoCtrl.repoData.public = 'privado'
            }
        }


        function getRepoContributors() {
            repoCtrl.repoData.contributors

            if(repoCtrl.userName != undefined && repoCtrl.userName != "") {
                repoSrvc.getRepoContributors(repoCtrl.userName, repoCtrl.repoName)
                    .then(function(resp){
                        console.log('getRepoContributors', resp);
                        repoCtrl.repoData.contributors = 'resp';
                        console.log('repoCtrl.userRepo.contributors', repoCtrl.userRepo.contributors);
                    })
            }
        }
/*

        function getRepoBranches() {

            if(repoCtrl.userName != undefined && repoCtrl.userName != "") {
                repoSrvc.getRepoBranches(repoCtrl.userName, repoCtrl.repoName)
                    .then(function(resp){
                        console.log('getRepoBranches', resp);
                        repoCtrl.repoData.branches = resp;
                        console.log('repoCtrl.userRepo.branches', repoCtrl.userRepo.branches);
                    })
            }
        }


        function getRepoCommits() {

            if(repoCtrl.userName != undefined && repoCtrl.userName != "") {
                repoSrvc.getRepoCommits(repoCtrl.userName, repoCtrl.repoName)
                    .then(function(resp){
                        console.log('getRepoCommits', resp);
                        repoCtrl.repoData.commits = resp;
                        console.log('repoCtrl.userRepo.commits', repoCtrl.userRepo.commits);
                    })
            }
        }
*/

    }
})();