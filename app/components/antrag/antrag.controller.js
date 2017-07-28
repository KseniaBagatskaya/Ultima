;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragController', AntragController)

    AntragController.$inject = ['$scope', 'banks', 'antragsteller', 'antrag'];

    function AntragController($scope, banks, antragsteller, antrag) {
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
        // vm.getPercent = getPercent;
        vm.match = antragsteller.getAblehnung();
        vm.deleteFinanzierungsbausteine = deleteFinanzierungsbausteine;
        vm.round = round;
        vm.privatDarlehen = privatDarlehen;
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
            var selectedName = 'automatisch';
            for (const group in object) {
                if (object[group]) {
                    selected++;
                    selectedName = object[group];
                }
            }
            if (selected > 1) {
                return 'mehrere';
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
            if (typeof vm.data.finanzierungsbausteines !== 'undefined') {
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

        function privatDarlehen(method, arg1, arg2) {
            switch (method) {
                case 'percent':
                    antrag.privatDarlehen.darlehensbetrag = arg1;
                    antrag.privatDarlehen.vermittlungscourtage_percent = arg2;
                    return _percent();
                case 'antragssumme': {
                    antrag.privatDarlehen.restchuldversicherung = arg1;
                    return _antragssumme();
                }
                case 'kreditgebuhren_nominalzins': {
                    antrag.privatDarlehen.kreditgebuhren_nominalzins = arg1;
                    return _kreditgebuhren_nominalzins();
                }
                case 'gesamtkreditbetrag': {
                    return _gesamtkreditbetrag();
                }
                case 'erste_rate_eur': {
                    antrag.privatDarlehen.laufzeit = arg1;
                    return _erste_rate_eur();
                }
                case 'letzte_rate': {
                    return _letzte_rate();
                }

            }
            function _percent() {
                return antrag.privatDarlehen.vermittlungscourtage();
            }

            function _antragssumme() {
                return antrag.privatDarlehen.antragssumme();
            }

            function _kreditgebuhren_nominalzins() {
                return antrag.privatDarlehen.zinsbelastung();
            }

            function _gesamtkreditbetrag() {
                return antrag.privatDarlehen.gesamtkreditbetrag();
            }

            function _erste_rate_eur() {
                return antrag.privatDarlehen.erste_rate_eur();
            }

            function _letzte_rate() {
                return antrag.privatDarlehen.letzte_rate();
            }
        }

    }

})();