;(function () {

    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', 'users_data', 'url', 'http', '$state','partners', 'dashboard'];


    function DashboardController($scope, users_data, url, http, $state,  partners, dashboard) {
        let vm = this;
        const user = JSON.parse(sessionStorage.getItem('user'));
        vm.vornameClicked = vornameClicked;
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
            sessionStorage.setItem('entrie_vorgang', JSON.stringify(vm.data));
        }

        function vornameClicked(code, id) {
            console.log(code)
            sessionStorage.setItem('transactionId', code);
            $state.go('app.tabs.antragsteller', {id: id});
        }

        vm.werbung = [
            'ultima.de',
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
            'kredit-aktuell.de',
            'Einkauf-Aktuell',
            'Ultima Immobilienfinanzierung',
            'Ebay-Kleinanzeigen',
            'alsterhyp',
        ];

    }

})();