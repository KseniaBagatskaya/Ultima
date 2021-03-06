;(function () {

    'use strict';

    angular.module('model.wiedervorlage', [])
        .service('wiedervorlage', wiedervorlage);

    wiedervorlage.$inject = ['http', 'url', '$stateParams'];

    function wiedervorlage(http, url, $stateParams) {

        let service = {
            getData: getData,
            getVorgangs: getVorgangs
        };
        return service;


        function getData(data) {
            return http.get(url.wiedervorlage.index, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }
        function getVorgangs(data) {
            return http.post(url.wiedervorlage.vorgangs, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }


    }


})();