;(function () {

    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'users_data', 'url', 'http'];


    function DashboardController($scope, users_data, url, http, werbung, kontaktar, partners) {
        let vm = this;
        vm.data = {};
        vm.submit = submit;
        vm.werbung = werbung;
        vm.kontaktar = kontaktar;
        vm.partners = partners;


        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };

        vm.users = users_data;

        function submit() {
            console.log(vm.data);
            sessionStorage.setItem('entry', JSON.stringify(vm.data));
        }

    }

})();