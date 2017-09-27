(function() {
    'use strict';

    angular
        .module('buscadorMdle')
        .controller('buscadorCtrl', buscadorCtrl);

    buscadorCtrl.$inject = ['buscadorSrvc'];

    function buscadorCtrl(buscadorSrvc) {
        var buscadorCtrl = this;
        buscadorCtrl.userName = buscadorCtrl.userName;
        buscadorCtrl.filterName = buscadorCtrl.filterName;
        buscadorCtrl.existInfo = false;
        buscadorCtrl.usersList;

        buscadorCtrl.searchGitUsers = searchGitUsers;
        buscadorCtrl.filterRepos = filterRepos;

        init();


        function init() {
        }

        function searchGitUsers() {
            existInfo();
            console.log('buscadorCtrl.userName', buscadorCtrl.userName);

            if(buscadorCtrl.userName != undefined && buscadorCtrl.userName != "") {
                buscadorSrvc.getGitUsers(buscadorCtrl.userName)
                    .then(function(resp){
                        console.log('resp', resp);
                        buscadorCtrl.usersList = resp;
                        existInfo();
                        console.log('buscadorCtrl.usersList', buscadorCtrl.usersList);
                    })
            }
        }


        function existInfo(){

            if(buscadorCtrl.usersList != undefined && buscadorCtrl.userName != undefined && buscadorCtrl.userName != "") {
                buscadorCtrl.existInfo = true;
            } else {
                buscadorCtrl.existInfo = false;
            }
        }

        function filterRepos() {

            console.log('buscadorCtrl.filterName', buscadorCtrl.filterName);
            angular.forEach(buscadorCtrl.usersList, function(repo) {
                if (repo.full_name == buscadorCtrl.filterName){
                     console.log('igual');
                }
            });
        }
    }
})();