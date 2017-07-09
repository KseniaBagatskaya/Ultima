;(function () {

    'use strict';

    angular.module('model.immobilie', [])
        .service('immobilie', immobilie);

    immobilie.$inject = ['http', 'url', '$stateParams'];

    function immobilie(http, url, $stateParams) {

        let service = {
            getData: getData
        };
        return service;


        function getData(id) {
            let data = {
                entryId: id
            };
            return http.get(url.immobilie.index, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }
    }


})();