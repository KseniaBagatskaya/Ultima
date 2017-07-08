;(function () {

    'use strict';

    angular.module('app')

        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = ['$scope', 'http', 'url'];
    function RegistrationController($scope, http, url) {

        let vm = this;
        vm.register = register;
        vm.newUser = {
            username: '',
            email: '',
            password: '',
        }


        function register() {
            http.post(url.user.register, vm.newUser)
                .then(function (res) {
                    console.log(res, 'res');
                    if (res.status) {
                        toastr.info('New user created');
                    } else {
                        for(var key in res.msg) {
                            toastr.error(res.msg[key][0], 'Registration failed');
                        }
                    }
                });
        }
    }


})();