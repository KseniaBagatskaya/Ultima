;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragstellerController', AntragstellerController);

    AntragstellerController.$inject = ['$scope'];


    function AntragstellerController($scope) {
        let vm = this;
        vm.submit = submit;
        vm.antragsteller1 = {
            number: '1'
        };
        vm.antragsteller2 = {
            number: '2'
        };


        function submit() {
            console.log(vm.antragsteller1);
            console.log(vm.antragsteller2);
        }
    }

})();