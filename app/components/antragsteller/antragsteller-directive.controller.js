;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragstellerDirectiveController', AntragstellerDirectiveController);

    AntragstellerDirectiveController.$inject = ['$scope', 'antragsteller'];


    function AntragstellerDirectiveController($scope, antragsteller) {
        let vm = this;
        vm.data = $scope.parent;
        vm.customAddress = customAddress;
        vm.convertDateFromString = antragsteller.convertDateFromString;
        if (vm.data.number === '1') {
            vm.show_address = true;
        } else {
            vm.show_address = false;
        }


        function customAddress() {
            vm.show_address = true;
        }


    }

})();