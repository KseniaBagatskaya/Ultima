;(function () {
    angular
        .module('factory.url', [])
        .factory('url', [
            function () {
                let baseUrl = 'http://itls-hh.eu/';
                return {
                    user: {
                        login: baseUrl + 'AccountManage/Authentication'
                    },
                    dashboard: {
                        get_all_members: baseUrl + 'Rest/GetAllMembers',
                        get_werbung: baseUrl + '',
                        get_kontaktart: baseUrl + '',
                        get_partners: baseUrl + '',
                    },
                    anstragsteller: {}
                };

            }
        ]);
})();