; (function () {

    'use strict';

    angular.module('model.briefvorlagen', [])
        .service('briefvorlagen', briefvorlagen);

    briefvorlagen.$inject = ['http', 'url', '$stateParams'];

    function briefvorlagen(http, url, $stateParams) {

        let service = {
            getData: getData,
            updateData: updateData,
        };
        return service;


        function getData() {
            const user = JSON.parse(sessionStorage.getItem('user'));
            return http.get(url.briefvorlagen.getList, { AuthKey: user.AuthKey })
                .then(function (res) {
                    return res;
                });
        }

        function updateData(data) {
            return http.post(url.briefvorlagen.updateTemplate, data)
                .then(function (res) {
                    return res;
                });
        }
    }


})();