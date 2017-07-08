;(function () {
    angular
        .module('factory.url', [])
        .factory('url', [
            function () {
                let baseUrl = 'http://svm.biz.ua/api/web/v1/';
                return {
                    user: {
                        login: baseUrl + 'user/login'
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