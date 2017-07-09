;(function () {

    'use strict';

    angular.module('app')
        .controller('WeitereImmobilienController', WeitereImmobilienController)

    WeitereImmobilienController.$inject = ['$scope'];

    function WeitereImmobilienController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        vm.addDarlehen = addDarlehen;
        vm.deleteDarlehen = deleteDarlehen;
        console.log(vm.data);


        function addDarlehen() {
            if (!vm.data.darlehens) {
                vm.data.darlehens = [];
            }
            vm.data.darlehens.push({
                _delete: deleteDarlehen
            });
        }

        function deleteDarlehen(index) {
            vm.data.darlehens.splice(index, 1);

        }


    }

})();