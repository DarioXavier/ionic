(function() {
    'use strict';

    angular
        .module('userListMdle')
        .directive('userListDrctv', userListDrctv);

    userListDrctv.$inject = [];

    function userListDrctv() {
        return {
            restrict: 'E',
            templateUrl: 'js/app/directivas/userList/userList.html'
        }
    }
})();