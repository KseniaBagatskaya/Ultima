;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragController', AntragController)

    AntragController.$inject = ['$scope', 'banks', 'antragsteller'];

    function AntragController($scope, banks, antragsteller) {
        let vm = this;

        vm.data = $scope.parent;
        vm.data.erstelltam = new Date();
        vm.user = JSON.parse(sessionStorage.getItem('user'));
        vm.data.bearbeiter = vm.user.Benutzername;
        vm.convertDateFromString = antragsteller.convertDateFromString;
        vm.index = $scope.index;
        vm.anfrageIsOpened = false;
        vm.changeWiedervorlage = changeWiedervorlage;
        vm.banks = JSON.parse($scope.banks);
        vm.addAnfrage = addAnfrage;
        vm.deleteAnfrage = deleteAnfrage;
        vm.toggleAnfrage = toggleAnfrage;
        vm.confertStringTodate = confertStringTodate;
        vm.addFinanzierungsbausteine = addFinanzierungsbausteine;
        vm.toggleTooltip = toggleTooltip;
        vm.getTotalOfGesamtprovision = getTotalOfGesamtprovision;
        vm.getTotalOfBeraterrovision = getTotalOfBeraterrovision;
        vm.getPercent = getPercent;
        vm.match = antragsteller.getAblehnung();
        vm.isTooltipOpened = false;
        function toggleAnfrage() {
            if (vm.anfrageIsOpened) {
                vm.anfrageIsOpened = false;
            } else {
                vm.anfrageIsOpened = true;
            }
        }

        function toggleTooltip() {
            vm.isTooltipOpened = !vm.isTooltipOpened;
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

        function confertStringTodate(date) {
            return new Date(parseInt(date));
        }

        function changeWiedervorlage() {
            vm.data.wiedervorlage = +new Date(vm.data.wiedervorlaget);
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
                _delete: deleteFinanzierungsbausteine,
                getPercent: vm.getPercent
            });
        }

        function deleteFinanzierungsbausteine(index) {
            vm.data.finanzierungsbausteines.splice(index, 1);
        }

        function getTotalOfGesamtprovision() {
            let total = 0;
            vm.data.finanzierungsbausteines.forEach(function (item) {
                total += parseFloat(item.gesamtprovision_eur)
            });
            return isNaN(total) ? 0 : total;
        }

        function getTotalOfBeraterrovision() {
            let total = 0;
            vm.data.finanzierungsbausteines.forEach(function (item) {
                total += parseFloat(item.provisionBerater_eur)
            });
            return isNaN(total) ? 0 : total;
        }

        function getPercent(num, percent) {
            return parseFloat(num) * parseFloat(percent) / 100;
        }

    }

})();