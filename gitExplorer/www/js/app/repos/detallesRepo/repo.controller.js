(function() {
    'use strict';

    angular
        .module('repoSrvc')
        .controller('repoCtrl', repoCtrl);

    repoCtrl.$inject = ['repoSrvc'];

    function repoCtrl(repoSrvc) {
        var repoCtrl = this;
        

        init();


        function init() { }
    }
})();