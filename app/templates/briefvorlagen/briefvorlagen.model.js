; (function () {

    'use strict';

    angular.module('model.briefvorlagen', [])
        .service('briefvorlagen', briefvorlagen);

    briefvorlagen.$inject = ['http', 'url', '$stateParams'];

    function briefvorlagen(http, url, $stateParams) {

        let service = {
            getData: getData,
        };
        return service;


        function getData() {
            return http.get(url.briefvorlagen.getList, data)
                .then(function (res) {
                    return res;
                });
        }
    }


})();