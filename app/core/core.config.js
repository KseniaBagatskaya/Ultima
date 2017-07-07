;(function () {
    angular
        .module('app')
        .config(mainConfig);


    mainConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function mainConfig($stateProvider, $urlRouterProvider) {


        $urlRouterProvider.otherwise('/login');

        $stateProvider
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
                        let partners=dashboard.getPartners();
                        return partners;
                        // .then(function (res) {
                        //     console.log(res, 'kontaktar');
                        //     return res;
                        // });
                    }

                }
            })


    }


})();

