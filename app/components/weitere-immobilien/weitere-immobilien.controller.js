;(function () {

    'use strict';

    angular.module('app')
        .controller('WeitereImmobilienController', WeitereImmobilienController)

    WeitereImmobilienController.$inject = ['$scope'];

    function WeitereImmobilienController($scope) {
        let vm = this;
        vm.array = $scope.array;
        vm.addDarlehen = addDarlehen;
        vm.deleteWis = deleteWis;


        function addDarlehen(immobilien) {
            if (!immobilien.darlehens) {
                immobilien.darlehens = [];
            }
            immobilien.darlehens.push({});
        }

        function deleteWis(index) {
            vm.array.splice(index, 1);
        }


    }

})();