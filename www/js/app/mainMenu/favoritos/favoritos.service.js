(function() {
    'use strict';

    angular
        .module('favoritosMdle')
        .factory('favoritosSrvc', favoritosSrvc);

    favoritosSrvc.$inject = ['$window'];

    function favoritosSrvc($window) {

        var favoriteUsersStorage = [
            {login: "git", html_url: "https://github.com/git"},
            {login: "angular", html_url: "https://github.com/angular"},
            {login: "ionic-team", html_url: "https://github.com/ionic-team"},
            {login: "ubuntu", html_url: "https://github.com/ubuntu"},
        ];

        //$window.localStorage['favoriteUsersStorage'] = JSON.stringify(favoriteUsersStorage);

        var favoriteUsers = JSON.parse($window.localStorage['favoriteUsersStorage']);

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
                $window.localStorage['favoriteUsersStorage'] = JSON.stringify(favoriteUsers);
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