;(function () {

    'use strict';

    angular.module('app')
        .controller('AnfrageController', AnfrageController);

    AnfrageController.$inject = ['$scope'];

    function AnfrageController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        vm.addDarlehen = addDarlehen;
        vm.deleteDarlehen = deleteDarlehen;
        vm.toggleAnfrage = toggleAnfrage;
        vm.anfrageIsOpened = false;


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

        vm.banks = [
            {
                id: 1,
                name: 'b_Name ASCDESC',
            },
            {
                id: 2,
                name: 'VON ESSEN Bank GmbH',
            },
            {
                id: 3,
                name: 'VON ESSEN Bank GmbH',
            },
            {
                id: 4,
                name: 'Kreditbank Segeberg eG',
            },
            {
                id: 5,
                name: 'Waren-Kredit-Gesellschaft Neumünster e.G.',
            },
            {
                id: 6,
                name: 'Oyak Anker Bank',
            },
            {
                id: 7,
                name: 'Allkredit',
            },
            {
                id: 8,
                name: 'Allgemeine Deutsche Direkt Bank',
            },
            {
                id: 9,
                name: 'VVK Volkskredit GmbH',
            },
            {
                id: 10,
                name: 'Service Bank',
            },
            {
                id: 11,
                name: 'WKV Bank GmbH',
            },
            {
                id: 13,
                name: 'Aachener Bausparkasse',
            },
            {
                id: 14,
                name: 'nicht mehr benutzen !!!',
            },
            {
                id: 18,
                name: 'Solitär Internationale Finanzdienstleistungen (...)',
            },
            {
                id: 19,
                name: 'Service Bank GmbH & Co.KG',
            },
            {
                id: 20,
                name: 'Service Bank GmbH & Co.KG',
            },
            {
                id: 21,
                name: 'Deutsche Bausparkasse Badenia',
            },
            {
                id: 22,
                name: 'Noris Bank AG',
            },
            {
                id: 31,
                name: '-Internet- von Essen KG',
            },
            {
                id: 32,
                name: '-Internet- Service Bank',
            },
            {
                id: 33,
                name: 'Solitär Internationale Finanzdienstleistungen (...)',
            },
            {
                id: 34,
                name: 'CTB Leasing GmbH',
            },
            {
                id: 35,
                name: 'ABC Privatkunden-Bank',
            },
            {
                id: 36,
                name: 'HM LV-Darlehen',
            },
            {
                id: 37,
                name: '-Internet-ABC Privatkundenbank',
            },
            {
                id: 38,
                name: 'beauty-kredit ABC Privatkundenbank',
            },
            {
                id: 39,
                name: 'beauty-kredit von Essen KG',
            },
            {
                id: 40,
                name: 'VPS',
            },
            {
                id: 41,
                name: 'M - Company',
            },
            {
                id: 42,
                name: 'CreditEuropeBank',
            },
            {
                id: 43,
                name: 'Finansbank',
            },
            {
                id: 44,
                name: 'Darwin International Ltd.',
            },
            {
                id: 45,
                name: 'VON ESSEN Bank GmbH',
            },
            {
                id: 46,
                name: 'VON ESSEN Bank GmbH',
            },
            {
                id: 47,
                name: 'KarstadtQuelle Bank AG',
            },
            {
                id: 48,
                name: 'Kreditbetrieb DSL Bank KB RK F',
            },
            {
                id: 49,
                name: 'Readybank ag',
            },
            {
                id: 50,
                name: 'Finance Marketing Andreas Kamin',
            },
            {
                id: 51,
                name: 'readybank Immobilien',
            },
            {
                id: 52,
                name: 'Hanseatic Bank',
            },
            {
                id: 53,
                name: 'Smava GmbH',
            },
            {
                id: 54,
                name: 'externe Banken',
            },
            {
                id: 55,
                name: 'DKB Deutsche Kreditbank AG',
            },
            {
                id: 56,
                name: 'VON ESSEN GmbH & Co. KG',
            },
            {
                id: 57,
                name: 'Wüstenrot',
            },
            {
                id: 58,
                name: 'BHW',
            },
            {
                id: 59,
                name: 'Prohyp GmbH',
            },
            {
                id: 60,
                name: 'UniCredit Family Financing Bank',
            },
            {
                id: 61,
                name: 'PFS',
            },
            {
                id: 62,
                name: 'Abakus 24',
            },
            {
                id: 63,
                name: 'Deutsche Bank Baufinanzierung',
            },
            {
                id: 64,
                name: 'Starpool DSL Bank',
            },
            {
                id: 65,
                name: 'auxmoney GmbH',
            },
            {
                id: 66,
                name: 'elbehyp',
            },
            {
                id: 67,
                name: 'BKV GmbH'
            }
        ];

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