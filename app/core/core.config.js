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
            })
            .state('app.tabs', {
                abstract: true,
                templateUrl: 'templates/tabs/tabs.html',
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginController',
                controllerAs: 'vm',
            })
            .state('dashboard', {
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

                    }
                }
            })
            .state('app.tabs.antragsteller', {
                url: "/antragsteller",
                templateUrl: 'templates/antragsteller/antragsteller.html',
                controller: 'AntragstellerController',
                controllerAs: 'vm',
                // resolve: {

                //     antragsteller_data: function (dashboard) {
                //         return dashboard.getAllMembers()
                //             .then(function (res) {
                //                 console.log(res, 'res');
                //                 return res;
                //             });

                //     }
                // }
            })
            .state('immobilie', {
                url: "/immobilie",
                templateUrl: 'templates/immobilie/immobilie.html',
                controller: 'ImmobilieController',
                controllerAs: 'vm',
                // resolve: {

                //     antragsteller_data: function (dashboard) {
                //         return dashboard.getAllMembers()
                //             .then(function (res) {
                //                 console.log(res, 'res');
                //                 return res;
                //             });

                //     }
                // }
            })
            .state('kreditdaten', {
                url: "/kreditdaten",
                templateUrl: 'templates/kreditdaten/kreditdaten.html',
                controller: 'KreditdatenController',
                controllerAs: 'vm',
                // resolve: {

                //     antragsteller_data: function (dashboard) {
                //         return dashboard.getAllMembers()
                //             .then(function (res) {
                //                 console.log(res, 'res');
                //                 return res;
                //             });

                //     }
                // }
            })
            .state('dokumente', {
                url: "/dokumente",
                templateUrl: 'templates/dokumente/dokumente.html',
                controller: 'DokumenteController',
                controllerAs: 'vm',
                // resolve: {

                //     antragsteller_data: function (dashboard) {
                //         return dashboard.getAllMembers()
                //             .then(function (res) {
                //                 console.log(res, 'res');
                //                 return res;
                //             });

                //     }
                // }
            })


    }


})();

