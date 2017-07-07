;(function () {

    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'users_data'];


    function DashboardController($scope, users_data) {
        var vm = this;
        vm.data = {};

        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };
        var filtered = users_data.map(function (value) {
            value.FamilyMemDate = new Date(value.FamilyMemDate);
            return value;
        });
        console.log(filtered);
        vm.users = filtered;

    }

})();