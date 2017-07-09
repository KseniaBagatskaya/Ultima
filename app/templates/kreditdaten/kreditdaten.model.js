;(function () {

    'use strict';

    angular.module('model.kreditdaten', [])
        .service('kreditdaten', kreditdaten);

    kreditdaten.$inject = ['http', 'url', '$stateParams'];

    function kreditdaten(http, url, $stateParams) {

        let service = {
            getData: getData
        };
        return service;


        function getData(id) {
            let data = {
                entryId: id
            };
            return http.get(url.kreditdaten.index, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }
    }


})();