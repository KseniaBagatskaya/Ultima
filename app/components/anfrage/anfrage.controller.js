;(function () {

    'use strict';

    angular.module('app')
        .controller('AnfrageController', AnfrageController);

    AnfrageController.$inject = ['$scope', 'banks', 'antragsteller'];

    function AnfrageController($scope, banks, antragsteller) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        vm.toggleAnfrage = toggleAnfrage;
        vm.convertDateFromString = antragsteller.convertDateFromString;
        vm.anfrageIsOpened = false;
        // vm.banks = banks.getAllBanks();
        vm.banks = JSON.parse($scope.banks);
        vm.currentDate = new Date();

        function toggleAnfrage() {
            if (vm.anfrageIsOpened) {
                vm.anfrageIsOpened = false;
            } else {
                vm.anfrageIsOpened = true;
            }
        }

        $scope.$watch('vm.data.reason', function () {
            if (vm.data.reason) {
                vm.data.fieldOne = vm.currentDate;
            }
        });

        vm.match = antragsteller.getAblehnung();


    }

})();