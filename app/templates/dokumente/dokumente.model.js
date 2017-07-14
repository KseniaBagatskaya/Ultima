;(function () {

    'use strict';

    angular.module('model.dokument', [])
        .service('dokument', dokument);


    dokument.$inject = ['http', 'url'];

    function dokument(http, url) {


        let service = {
            getAllDocs: getAllDocs,
        };
        return service;

        function getAllDocs(id) {
            return http.get(url.dokument.get_all_documents)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }
    }
})();