;(function () {

    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'users_data'];


    function DashboardController($scope, users_data, werbung, kontaktar, partners) {
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


        // var filtered = users_data.map(function (value) {
        //     value.FamilyMemDate = new Date(value.FamilyMemDate);
        //     return value;
        // });
        // console.log(filtered);
        vm.users = users_data;

        function submit() {
            console.log(vm.data);
        }
    }

})();