(function() {
    'use strict';

    angular
        .module('userListMdle')
        .directive('userListDrctv', userListDrctv);

    userListDrctv.$inject = [];

    function userListDrctv() {
        return {
            restrict: 'E',
            
            scope: {
                usuario: '='
            },
            templateUrl: 'js/app/directivas/userList/userList.html'
        }
    }
})();