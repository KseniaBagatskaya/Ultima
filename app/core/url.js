;(function () {
    angular
        .module('factory.url', [])
        .factory('url', [
            function () {
                let baseUrl = 'http://itls-hh.eu/';
                let baseUrlNew = 'http://svm.biz.ua/api/web/v1/';
                return {
                    user: {
                        login: baseUrlNew + 'user/login',
                        register: baseUrlNew + 'user/registration'
                    },
                    dashboard: {
                        create_angrag: baseUrlNew + 'antragsteller/create',
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