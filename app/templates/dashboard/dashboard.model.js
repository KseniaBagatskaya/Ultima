;(function () {

    'use strict';

    angular.module('app.dashboard', [])
        .service('dashboard', dashboard);


    dashboard.$inject = ['http', 'url'];

    function dashboard(http, url) {


        let service = {
            getAllMembers: getAllMembers,
            getWerbung: getWerbung,
            getKontaktart: getKontaktart,
            getPartners: getPartners
        };
        return service;

        function getAllMembers() {
            return http.get(url.dashboard.get_all_members)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

        function getWerbung() {
            return [
                {
                    id: 10,
                    value: 'Pamela Wilson Agentur	'
                },
                {
                    id: 2,
                    value: 'Bertelsmann'
                },
                {
                    id: 3,
                    value: 'VPS'
                },
                {
                    id: 3,
                    value: 'Postwurfsendung'
                },
                {
                    id: 4,
                    value: 'Internet'
                },
            ];

            // return http.get(url.dashboard.get_werbung)
            //     .then(function (res) {
            //         console.log(res, 'res');
            //         return res;
            //     });
        }

        function getKontaktart() {
            return [
                {
                    id: 1,
                    value: 'E-Mail'
                },
                {
                    id: 2,
                    value: 'telefonisch'
                },
                {
                    id: 3,
                    value: 'per Post'
                },
                {
                    id: 3,
                    value: 'direkt'
                },
                {
                    id: 4,
                    value: 'Internet'
                },
            ];
            // return http.get(url.dashboard.get_kontaktart)
            //     .then(function (res) {
            //         console.log(res, 'res');
            //         return res;
            //     });
        }

        function getPartners() {
            return http.get(url.dashboard.get_partners)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

    }
})();