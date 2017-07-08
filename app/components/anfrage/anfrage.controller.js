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


    }

})();