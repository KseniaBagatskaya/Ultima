;(function () {
    angular
        .module('factory.url', [])
        .factory('url', [
            function () {
                let baseUrl = 'http://itls-hh.eu/';
                let baseUrlNew = 'http://svm.biz.ua/api/web/v1/';
                return {
                    user: {
                        login: baseUrl + 'AccountManage/Authentication',
                        register: baseUrlNew + 'user/registration'
                    },
                    dashboard: {
                        submit_vorgang: baseUrl + 'dashboard/addVorgang',
                        create_angrag: baseUrlNew + 'antragsteller/create',
                        update_angrag: baseUrlNew + 'antragsteller/update',
                        get_angrag: baseUrlNew + 'antragsteller/index',
                        get_all_members: baseUrl + 'dashboard/GetAllvorgangs',
                        get_werbung: baseUrl + '',
                        get_kontaktart: baseUrl + '',
                        get_partners: baseUrl + 'Dashboard/GetAllAdressens',
                    },
                    anstragsteller: {
                        index: baseUrl + 'Antragsteller/GetAntragstellersById',
                        update: baseUrl + 'Antragsteller/AntragstellerUpdate',
                    },
                    immobilie: {
                        create: baseUrlNew + 'immobilie/create',
                        update: baseUrlNew + 'immobilie/update',
                        index: baseUrlNew + 'immobilie/index',
                    },
                    kreditdaten: {
                        create: baseUrlNew + 'kredit-daten/create',
                        update: baseUrlNew + 'kredit-daten/update',
                        index: baseUrlNew + 'kredit-daten/index',
                    },
                    dokument: {
                        get_all_documents: 'http://itls-hh.eu/Document/GetDocumentsById',
                        file: baseUrl + 'Document/UploadFile',
                        uploadDoc: baseUrl + 'Document/UploadFile',
                    },
                    wiedervorlage: {
                        index: baseUrlNew + 'kredit-daten/index-wiedervolage'
                    }
                };

            }
        ]);
})();