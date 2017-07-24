;(function () {

    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'users_data', 'url', 'http', '$state','partners', 'dashboard'];


    function DashboardController($scope, users_data, url, http, $state,  partners, dashboard) {
        let vm = this;
        const user = JSON.parse(sessionStorage.getItem('user'));
        vm.data = {
            Verwendungszweck: "1",
            Plz: "",
            Finanzbedarf: "",
            Werbung: "0",
            Kontaktart: "-1",
            Partnergeschaft: "Ja",
            Genutzt: "Vermietet",
            PartnergeschaftList: "",
            AuthKey: user.AuthKey
        };
        vm.submit = submit;
        vm.partners = partners;


        $scope.modalShown = false;
        $scope.toggleModal = function () {
            $scope.modalShown = !$scope.modalShown;
        };

        vm.users = users_data;

        function submit() {
            dashboard.submitVorgang(vm.data);
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

    }

})();