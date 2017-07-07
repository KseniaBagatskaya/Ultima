;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragstellerController', AntragstellerController);

    AntragstellerController.$inject = ['$scope'];


    function AntragstellerController($scope) {
        let vm = this;
        vm.submit = submit;
        vm.addKinder = addKinder;
        vm.deleteKinder = deleteKinder;


        vm.antragsteller1 = {
            number: '1'
        };
        vm.antragsteller2 = {
            number: '2'
        };
        vm.kinders = [];


        function submit() {
            console.log(vm.antragsteller1);
            console.log(vm.antragsteller2);
            console.log(vm.kinders);
        }

        function addKinder() {
            vm.kinders.push({
                _delete: deleteKinder
            });
        }

        function deleteKinder(index) {
            vm.kinders.splice(index, 1);
        }
    }

})();