(function() {
    'use strict';

    angular
        .module('favoritosMdle')
        .factory('favoritosSrvc', favoritosSrvc);

    favoritosSrvc.$inject = [];

    function favoritosSrvc() {

        var favoriteUsers = [
            {login: "git", html_url: "https://github.com/git", score: 26.110144},
            {login: "angular", html_url: "https://github.com/angular", score: 46.099743},
            {login: "ionic-team", html_url: "https://github.com/ionic-team", score: 45.04528},
            {login: "ubuntu", html_url: "https://github.com/ubuntu", score: 35.561646},
        ];

        return {
            favoriteUsers: favoriteUsers,

            addFavoritos: addFavoritos,
            removeFavoritos: removeFavoritos
        }

        function addFavoritos(userData) {
            console.log('userData',userData);
            if (exisistUser(userData.login) == false) {
                console.log('exisistUser',exisistUser(userData.login));
                favoriteUsers.unshift(userData);
            }
        }

        function exisistUser(userLogin) {
            var exisist = false

            angular.forEach(favoriteUsers, function(user) {
                if (user.login == userLogin){
                     console.log('igual');
                     exisist = true;
                }
            });
            return exisist
        }

        function removeFavoritos(userData) {
            console.log('userData',userData);
            var index = favoriteUsers.indexOf(userData);
            console.log('index', index);
            favoriteUsers.splice(index, 1);
        }
    }
})();