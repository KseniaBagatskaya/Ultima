;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragController', AntragController)

    AntragController.$inject = ['$scope', 'banks', 'antragsteller'];

    function AntragController($scope, banks, antragsteller) {
        let vm = this;

        vm.data = $scope.parent;
        vm.data.erstelltam = new Date();
        vm.convertDateFromString = antragsteller.convertDateFromString;
        vm.index = $scope.index;
        vm.anfrageIsOpened = false;
        vm.changeWiedervorlage = changeWiedervorlage;
        // vm.banks = banks.getAllBanks();
        vm.banks = JSON.parse($scope.banks);
        vm.addAnfrage = addAnfrage;
        vm.deleteAnfrage = deleteAnfrage;
        vm.toggleAnfrage = toggleAnfrage;
        vm.addFinanzierungsbausteine = addFinanzierungsbausteine;
        vm.match = antragsteller.getAblehnung();
        function toggleAnfrage() {
            if (vm.anfrageIsOpened) {
                vm.anfrageIsOpened = false;
            } else {
                vm.anfrageIsOpened = true;
            }
        }

        function addAnfrage() {
            if (typeof vm.data.anfrages === 'undefined') {
                vm.data.anfrages = [];
            }
            vm.data.anfrages.push({
                _delete: deleteAnfrage
            });
        }

        function convertDateFromString(date) {
            return date;
        }

        function changeWiedervorlage() {
            vm.data.wiedervorlage = + new Date(vm.data.wiedervorlaget);
        }

        function deleteAnfrage(index) {
            vm.data.anfrages.splice(index, 1);
        }

        function addFinanzierungsbausteine(id, name, description) {
            if (typeof vm.data.finanzierungsbausteines === 'undefined') {
                vm.data.finanzierungsbausteines = [];
            }
            vm.data.finanzierungsbausteines.push({
                id: id,
                name: name || '',
                description: description || '',
                _delete: deleteFinanzierungsbausteine
            });
        }

        function deleteFinanzierungsbausteine(index) {
            vm.data.finanzierungsbausteines.splice(index, 1);
        }

    }

})();