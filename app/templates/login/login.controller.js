;(function () {

    'use strict';

    angular.module('app')

        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'http', 'url'];
    function LoginController($scope, http, url) {

        let vm = this;

        vm.login = login;

        vm.user = {
            username: '',
            password: ''
        };

        function login() {
            http.post(url.user.login, JSON.stringify(vm.user))
                .then(function (res) {
                    console.log(res, 'res');
                    // return res;
                });
        }
    }


})();