;(function () {

    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'users_data', 'url', 'http', '$state','partners'];


    function DashboardController($scope, users_data, url, http, $state,  partners) {
        let vm = this;
        vm.data = {
            genutzt: 'Eigennutzung',
            partner: 0,
        };
        debugger;
        vm.submit = submit;
        // vm.werbung = werbung;
        // vm.kontaktar = kontaktar;
        vm.partners = partners;


        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };

        vm.users = users_data;

        function submit() {
            sessionStorage.setItem('entry', JSON.stringify(vm.data));
            $state.go('app.tabs.antragsteller');
        }

        vm.werbung = [
            'Pamela Wilson Agentur',
            'Bertelsmann',
            'VPS',
            'Postwurfsendung',
            'Internet',
            'beauty-kredite',
            'medical-kredite',
            'finanz-turbo',
            'Blickpunkt',
            'Heimatspiegel',
            'Holsteiner Allgemeine',
            'Heider Anzeigenblatt',
            'Immoservice',
            'Wochenblatt',
            'ultima.de',
            'kredit-aktuell.de',
            'Einkauf-Aktuell',
            'Ultima Immobilienfinanzierung',
            'Ebay-Kleinanzeigen',
            'alsterhyp',
        ];

        // vm.partnerList = [
        //     'Bitte wählen Sie ...',
        //     'Tauchert, Michael',
        //     'Kahlke', 'Hermann',
        //     'Schwarz, Volker',
        //     'Nöthling, Arne',
        //     'Wilhelm, Friedegunde',
        // ];

    }

})();