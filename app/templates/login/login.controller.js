;(function () {

    'use strict';

    angular.module('app')

        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'http', 'url', '$state', 'toastr'];
    function LoginController($scope, http, url, $state, toastr) {

        let vm = this;

        vm.login = login;

        vm.user = {
            Email: '',
            Password: '',
        };

        function login() {
            http.post(url.user.login, vm.user)
                .then(function (res) {
                    if (res) {
                        sessionStorage.setItem('user', JSON.stringify(res));
                        $state.go('app.dashboard')
                    } else {
                        for (var key in res.msg) {
                            toastr.error(res.msg[key][0], 'Login failed');
                        }
                    }
                });
        }
    }


})();