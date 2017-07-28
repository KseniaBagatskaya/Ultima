;(function () {

    'use strict';

    angular.module('app')
        .controller('KinderController', KinderController)

    KinderController.$inject = ['$scope', 'antragsteller'];

    function KinderController($scope, antragsteller) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        vm.array = $scope.array;
        vm.deleteKinder = deleteKinder;
        vm.convertDateFromString = antragsteller.convertDateFromString;

        function deleteKinder(index) {
            vm.array.splice(index, 1);
        }
    }

})();