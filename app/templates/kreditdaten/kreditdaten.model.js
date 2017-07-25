;(function () {

    'use strict';

    angular.module('model.kreditdaten', [])
        .service('kreditdaten', kreditdaten);

    kreditdaten.$inject = ['http', 'url', '$stateParams'];

    function kreditdaten(http, url, $stateParams) {

        let service = {
            getData: getData,
            update: update,
            getAllBanks: getAllBanks
        };
        return service;


        function getData(id) {
            let data = {
                Id: id
            };
            return http.get(url.kreditdaten.index, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

        function update(data) {
            return http.post(url.kreditdaten.update, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

        function getAllBanks() {
            return http.get(url.banks.list)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }
    }


})();