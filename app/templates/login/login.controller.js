;(function () {

    'use strict';

    angular.module('app')

        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$http'];
    function LoginController($scope, $http) {

        let vm = this;

        vm.login = login;

        vm.user = {
            email: '',
            password: ''
        };

        function login() {
            console.log(vm.user);
        }
    }


})();