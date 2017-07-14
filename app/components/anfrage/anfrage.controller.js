;(function () {

    'use strict';

    angular.module('app')
        .controller('AnfrageController', AnfrageController);

    AnfrageController.$inject = ['$scope', 'banks'];

    function AnfrageController($scope, banks) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        vm.addDarlehen = addDarlehen;
        vm.deleteDarlehen = deleteDarlehen;
        vm.toggleAnfrage = toggleAnfrage;
        vm.anfrageIsOpened = false;
        vm.banks = banks.getAllBanks();

        function toggleAnfrage() {
            if (vm.anfrageIsOpened) {
                vm.anfrageIsOpened = false;
            } else {
                vm.anfrageIsOpened = true;
            }
        }


        function addDarlehen() {
            vm.data.darlehens.push({
                _delete: deleteDarlehen
            });
        }

        function deleteDarlehen(index) {
            vm.data.darlehens.splice(index, 1);
        }

        vm.match = [
            'nicht abgelehnt',
            'neg. Schufa',
            'Scoring',
            'ausgelastet',
            'zu kurz beschäftigt',
            'zu geringes Einkommen',
            'keine Angaben',
            'neg. Schweiz',
            'neg. AGR',
            'frischer Kredit',
            'Antragssumme zu hoch',
            'Unterschrift Ehepartner',
            'schleppende Zw',
            'Kunde-Rücktritt Widerruf',
            'Spielsucht',
            'Langzeitkrank',
            'neg. Kontoführung',
            'Kredit Rechtsabteilung',
            'negative VC',
        ];


    }

})();