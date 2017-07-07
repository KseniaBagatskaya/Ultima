;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragstellerController', AntragstellerController);

    AntragstellerController.$inject = ['$scope', 'antragsteller', 'bank_list'];


    function AntragstellerController($scope, antragsteller, bank_list) {
        let vm = this;
        vm.submit = submit;
        vm.addKinder = addKinder;
        vm.deleteKinder = deleteKinder;
        vm.clearKinder = clearKinder;
        vm.addItem = addItem;
        vm.bank_list = bank_list;

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

        function clearKinder() {
            vm.kinders = [];
        }

        function addItem(item) {
            if (item.max > item.items.length) {
                item.items.push({});
            }
        }


    }

})();