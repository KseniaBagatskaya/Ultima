;(function () {

    'use strict';

    angular.module('model.registration', [])
        .service('registration', registration);

    registration.$inject = ['http', 'url', '$stateParams'];

    function registration(http, url, $stateParams) {

        let service = {
            getAllUsers: getAllUsers,
            addUser: addUser
        };
        return service;


        function getAllUsers() {
            return http.get(url.registration.index)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

        function addUser(data) {
            return http.post(url.registration.addUser, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }


    }


})();