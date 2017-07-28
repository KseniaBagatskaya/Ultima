;(function () {

    'use strict';

    angular.module('app')
        .controller('WeitereDarlehenController', WeitereDarlehenController)

    WeitereDarlehenController.$inject = ['$scope'];

    function WeitereDarlehenController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        vm.array = $scope.array;
        vm.delete = $scope.delete;
        vm.deleteDarlehen = deleteDarlehen;

        function deleteDarlehen(index) {
            vm.array.splice(index, 1);
        }
    }

})();