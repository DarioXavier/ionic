(function() {
    'use strict';

    angular
        .module('favoritosMdle')
        .controller('favoritosCtrl', favoritosCtrl);

    favoritosCtrl.$inject = ['favoritosSrvc'];

    function favoritosCtrl(favoritosSrvc) {

        var favoritosCtrl = this;
        favoritosCtrl.favoriteUsers = favoritosSrvc.favoriteUsers;;
        
        console.log('favoritosCtrl.favoriteUsers', favoritosCtrl.favoriteUsers);

        init();

        function init() {
            
        }
    }
})();