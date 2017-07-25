;(function () {

    'use strict';

    angular.module('app')

        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$scope', 'http', 'url', 'users_list', 'registration'];
    function RegistrationController($scope, http, url, users_list, registration) {

        let vm = this;
        vm.register = register;
        vm.newUser = {
            Email: '',
            Password: '',
            Benutzername: '',
            PrimaryRole: 0,
        }
        vm.users = users_list || [];


        function register() {
            registration.addUser(vm.newUser);
        }
    }


})();