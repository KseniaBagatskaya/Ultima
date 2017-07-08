;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragController', AntragController)

    AntragController.$inject = ['$scope'];

    function AntragController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        vm.anfrageIsOpened = false;
        vm.data.anfrages = [];
        vm.addAnfrage = addAnfrage;
        vm.deleteAnfrage = deleteAnfrage;
        vm.toggleAnfrage = toggleAnfrage;
        vm.addFinanzierungsbausteine = addFinanzierungsbausteine;
        vm.data.finanzierungsbausteines = [];

        function toggleAnfrage() {
            if (vm.anfrageIsOpened) {
                vm.anfrageIsOpened = false;
            } else {
                vm.anfrageIsOpened = true;
            }
        }


        function addAnfrage() {
            vm.data.anfrages.push({
                _delete: deleteAnfrage
            });
        }

        function deleteAnfrage(index) {
            vm.data.anfrages.splice(index, 1);
        }

        function addFinanzierungsbausteine(id, name, description) {
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