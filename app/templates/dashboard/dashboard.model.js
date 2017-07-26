;(function () {

    'use strict';

    angular.module('app.dashboard', [])
        .service('dashboard', dashboard);


    dashboard.$inject = ['http', 'url', '$state'];

    function dashboard(http, url, $state) {


        let service = {
            getAllMembers: getAllMembers,
            getWerbung: getWerbung,
            getKontaktart: getKontaktart,
            getPartners: getPartners,
            submitVorgang: submitVorgang,
        };
        return service;


        function submitVorgang(data) {
            return http.post(url.dashboard.submit_vorgang, data)
                .then(function (res) {
                    sessionStorage.setItem('entry', JSON.stringify(data));
                    $state.go('app.tabs.antragsteller', {id: res});
                    return res;
                });
        }

        function getAllMembers() {
            const user = JSON.parse(sessionStorage.getItem('user'));

            return http.get(url.dashboard.get_all_members,{AuthKey:user.AuthKey})
                .then(function (res) {
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