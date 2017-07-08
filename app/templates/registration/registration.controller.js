;(function () {

    'use strict';

    angular.module('app')

        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$scope', 'http', 'url'];
    function RegistrationController($scope, http, url) {

        let vm = this;
        vm.newUser = {
            Email: '',
            Password: '',
        }
    }


})();