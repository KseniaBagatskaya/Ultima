;(function () {

    'use strict';

    angular.module('app')
        .controller('WeitereDarlehenController', WeitereDarlehenController)

    WeitereDarlehenController.$inject = ['$scope'];

    function WeitereDarlehenController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        console.log($scope);
        vm.delete = $scope.delete;
        vm.index = $scope.index;
    }

})();