;(function () {

    'use strict';

    angular.module('app')
        .controller('BankverbindungController', BankverbindungController);

    BankverbindungController.$inject = ['$scope'];

    function BankverbindungController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        console.log(vm.data);

    }

})();