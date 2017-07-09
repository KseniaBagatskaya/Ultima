;(function () {
    angular
        .module('app')
        .config(mainConfig);


    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('app', {
                abstract: true,
                templateUrl: 'templates/header/header.html',
                controller: 'HeaderController',
                controllerAs: 'vm',
            })
            .state('app.tabs', {
                abstract: true,
                templateUrl: 'templates/tabs/tabs.html',
                controller: 'TabsController',
                controllerAs: 'vm',
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
            })
            .state('app.registration', {
                url: "/registration",
                templateUrl: 'templates/registration/registration.html',
                controller: 'RegistrationController',
                controllerAs: 'vm',
            })
            .state('app.dashboard', {
                url: "/dashboard",
                templateUrl: 'templates/dashboard/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                resolve: {

                    users_data: function (dashboard) {
                        return dashboard.getAllMembers()
                            .then(function (res) {
                                console.log(res, 'res');
                                return res;
                            });

                    },

                    werbung: function (dashboard) {
                        return dashboard.getWerbung()
                        // .then(function (res) {
                        //     console.log(res, 'werbung');
                        //     return res;
                        // });
                    },
                    kontaktar: function (dashboard) {
                        return dashboard.getKontaktart()
                        // .then(function (res) {
                        //     console.log(res, 'kontaktar');
                        //     return res;
                        // });
                    },
                    partners: function (dashboard) {
                        let partners = dashboard.getPartners();
                        return partners;
                        // .then(function (res) {
                        //     console.log(res, 'kontaktar');
                        //     return res;
                        // });
                    }

                }
            })

            .state('app.tabs.antragsteller', {
                url: "/antragsteller/:id",
                templateUrl: 'templates/antragsteller/antragsteller.html',
                controller: 'AntragstellerController',
                controllerAs: 'vm',
                resolve: {
                    antrag_data: function (antragsteller,$stateParams) {
                        let id = $stateParams.id;
                        return antragsteller.getData(id)
                            .then(function (res) {
                                sessionStorage.setItem('transactionId', `${res.entry.transactionId || 0}`);
                                console.log(res, 'res');
                                return res;
                            });
                    },
                    bank_list: function (antragsteller) {
                        return antragsteller.menu;
                    }
                }
            })
            .state('app.tabs.immobilie', {
                url: "/immobilie/:id",
                templateUrl: 'templates/immobilie/immobilie.html',
                controller: 'ImmobilieController',
                controllerAs: 'vm',
                resolve: {
                    immobilie_data: function (immobilie,$stateParams) {
                        let id = $stateParams.id;
                        return immobilie.getData(id)
                            .then(function (res) {
                                console.log(res, 'res');
                                return res;
                            });
                    },
                }
            })
            .state('app.tabs.kreditdaten', {
                url: "/kreditdaten/:id",
                templateUrl: 'templates/kreditdaten/kreditdaten.html',
                controller: 'KreditdatenController',
                controllerAs: 'vm',
                resolve: {

                    kreditdaten_data: function (kreditdaten,$stateParams) {
                        let id = $stateParams.id;
                        return kreditdaten.getData(id)
                            .then(function (res) {
                                console.log(res, 'res');
                                return res;
                            });
                    },
                }
            })
            .state('app.tabs.dokumente', {
                url: "/dokumente/:id",
                templateUrl: 'templates/dokumente/dokumente.html',
                controller: 'DokumenteController',
                controllerAs: 'vm',
                resolve: {

                    documents_data: function (dokument, $stateParams) {
                        const id = $stateParams.id;
                        return dokument.getAllDocs(id)
                            .then(function (res) {
                                return res;
                            });

                    }
                }
            })


    }


})();

