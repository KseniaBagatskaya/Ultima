;(function () {

    'use strict';

    angular.module('app.dashboard', [])
        .service('dashboard', dashboard);


    dashboard.$inject = ['http', 'url'];

    function dashboard(http, url) {


        let service = {
            getAllMembers: getAllMembers
        };
        return service;

        function getAllMembers() {
            return http.get(url.dashboard.get_all_members)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }
    }
})();