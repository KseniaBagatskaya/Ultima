;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragController', AntragController)

    AntragController.$inject = ['$scope', 'banks'];

    function AntragController($scope, banks) {
        let vm = this;

        const user = JSON.parse(sessionStorage.getItem('user'));
        vm.data = $scope.parent;
        vm.data.bearbeiter = user.username;
<<<<<<< HEAD
        console.log(vm.data);
=======
>>>>>>> 2eddc1a0caefec55c95a4256ba2121990c90b7b2
        vm.data.erstelltam = new Date();
        vm.index = $scope.index;
        vm.anfrageIsOpened = false;
        vm.banks = banks.getAllBanks();
        // vm.data.anfrages = [];
        vm.addAnfrage = addAnfrage;
        vm.deleteAnfrage = deleteAnfrage;
        vm.toggleAnfrage = toggleAnfrage;
        vm.addFinanzierungsbausteine = addFinanzierungsbausteine;
        // vm.data.finanzierungsbausteines = [];

        function toggleAnfrage() {
            if (vm.anfrageIsOpened) {
                vm.anfrageIsOpened = false;
            } else {
                vm.anfrageIsOpened = true;
            }
        }


        console.log(vm.data)

        function addAnfrage() {
            if (typeof vm.data.anfrages === 'undefined') {
                vm.data.anfrages = [];
            }
            vm.data.anfrages.push({
                _delete: deleteAnfrage
            });
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