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
        vm.getLabel = getLabel;
        vm.deleteAnfrage = deleteAnfrage;
        vm.toggleAnfrage = toggleAnfrage;
        vm.confertStringTodate = confertStringTodate;
        vm.addFinanzierungsbausteine = addFinanzierungsbausteine;
        vm.toggleTooltip = toggleTooltip;
        vm.getTotalOfGesamtprovision = getTotalOfGesamtprovision;
        vm.getTotalOfBeraterrovision = getTotalOfBeraterrovision;
        vm.getPercent = getPercent;
        vm.match = antragsteller.getAblehnung();
        vm.deleteFinanzierungsbausteine = deleteFinanzierungsbausteine;
        vm.round = round;
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

        function getLabel(object) {
            var selected = 0;
            var selectedName = 'automatish';
            for (const group in object) {
                if (object[group]) {
                    selected++;
                    selectedName = object[group];
                }
            }
            if (selected > 1) {
                return 'mehre';
            } else {
                return selectedName;
            }
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
            });
        }

        function deleteFinanzierungsbausteine(index) {
            vm.data.finanzierungsbausteines.splice(index, 1);
        }

        function round(arg) {
            return Math.round(arg);
        }

        function getTotalOfGesamtprovision() {
            let total = 0;
            vm.data.finanzierungsbausteines.forEach(function (item) {
                if (item.hasOwnProperty('gesamtprovision_eur')) {
                    if (item.gesamtprovision_eur) {
                        total += parseFloat(item.gesamtprovision_eur)
                    }
                }
            });
            return total
        }

        function getTotalOfBeraterrovision() {
            let total = 0;
            if(typeof vm.data.finanzierungsbausteines !=='undefined'){
                vm.data.finanzierungsbausteines.forEach(function (item) {
                    if (item.hasOwnProperty('provisionBerater_eur')) {
                        if (item.provisionBerater_eur) {
                            total += parseFloat(item.provisionBerater_eur)
                        }
                    }
                });
            }
            return total
        }

        function getPercent(num, percent) {
            return parseFloat(num) * parseFloat(percent) / 100;
        }

    }

})();