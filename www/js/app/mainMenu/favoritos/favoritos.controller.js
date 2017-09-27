(function() {
    'use strict';

    angular
        .module('favoritosMdle')
        .controller('favoritosCtrl', favoritosCtrl);

    favoritosCtrl.$inject = ['favoritosSrvc'];

    function favoritosCtrl(favoritosSrvc) {

        var favoritosCtrl = this;
        favoritosCtrl.favoriteUsers = favoritosSrvc.favoriteUsers;

        favoritosCtrl.removeFavoritos = removeFavoritos;
        
        console.log('favoritosCtrl.favoriteUsers', favoritosCtrl.favoriteUsers);

        init();

        function init() {
            
        }

        function removeFavoritos(userData) {
            console.log('userData',userData);
            favoritosSrvc.removeFavoritos(userData);
        }
    }
})();