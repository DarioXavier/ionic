(function() {
    'use strict';

    angular
        .module('favoritosMdle')
        .factory('favoritosSrvc', favoritosSrvc);

    favoritosSrvc.$inject = ['$window'];

    function favoritosSrvc($window) {

        var favoriteUsersStorage = [
            {login: "git", html_url: "https://github.com/git", avatar_url: "https://avatars2.githubusercontent.com/u/18133?v=4"},
            {login: "angular", html_url: "https://github.com/angular", avatar_url: "https://avatars3.githubusercontent.com/u/139426?v=4"},
            {login: "ionic-team", html_url: "https://github.com/ionic-team", avatar_url: "https://avatars0.githubusercontent.com/u/3171503?v=4"},
            {login: "ubuntu", html_url: "https://github.com/ubuntu", avatar_url: "https://avatars1.githubusercontent.com/u/4604537?v=4"},
        ];

        //$window.localStorage['favoriteUsersStorage'] = JSON.stringify(favoriteUsersStorage);

        var favoriteUsers = JSON.parse($window.localStorage['favoriteUsersStorage']);
        console.log(favoriteUsers);

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
                updateLocalStorage();
                console.log('favoriteUsers', favoriteUsers);
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
        
        /*
        function removeFavoritos(userData) {
            console.log('userData',userData);
            var index = favoriteUsers.indexOf(userData);
            console.log('index', index);
            favoriteUsers.splice(index, 1);
        }
        */

        function removeFavoritos(userData) {
            console.log('userData',userData);
            var index = searchUserData(userData.login);
            console.log('index', index);
            favoriteUsers.splice(index, 1);
            updateLocalStorage();
        }

        function searchUserData(login) {
            var index = -1;
            angular.forEach(favoriteUsers, function(user) {
                console.log('user.login', user.login);
                console.log('login', login);
                if (user.login == login){
                    console.log('favoriteUsers.indexOf(user)', favoriteUsers.indexOf(user));
                    index = favoriteUsers.indexOf(user);
                }
            });
            return index;
        }

        function updateLocalStorage() {
            $window.localStorage['favoriteUsersStorage'] = JSON.stringify(favoriteUsers);
        }
    }
})();