;(function () {
    angular
        .module('factory.url', [])
        .factory('url', [
            function () {
                let baseUrl = 'http://itls-hh.eu/Rest/';
                return {
                    dashboard: {
                        get_all_members: baseUrl + 'GetAllMembers'
                    }
                };

            }
        ]);
})();