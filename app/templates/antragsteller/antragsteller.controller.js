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
        vm.checkMaxInBanks = checkMaxInBanks;
        vm.addBankverbindung = addBankverbindung;
        vm.addWis = addWis;
        vm.clearWis = clearWis;


        vm.bank_list = bank_list;
        vm.bank_items_left = [];
        vm.bank_items_right = [];
        vm.antragsteller1 = {number: '1'};
        vm.antragsteller2 = {number: '2'};
        vm.kinders = [];
        vm.bankverbindungs = [];
        vm.wis = []; //weitereImmobilien

        function submit() {
            let banks = {
                left: vm.bank_items_left,
                right: vm.bank_items_right
            };
            let data = {
                antragsteller1: vm.antragsteller1,
                antragsteller2: vm.antragsteller2,
                kinders: vm.kinders,
                banks: banks,
                bankverbindungs: vm.bankverbindungs,
                wis: vm.wis
            };
            console.log(JSON.stringify(data));
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

        function addItem(item, side) {
            if (item.max > item.current) {
                item.current++;
                let tmpItem = {
                    id: item.id,
                    _delete: deleteItem,
                    side: side
                };
                if (side === 'L') {
                    vm.bank_items_left.push(tmpItem);
                } else {
                    vm.bank_items_right.push(tmpItem);
                }
            }
        }

        function deleteItem(index, side) {
            if (side === 'L') {
                let item = antragsteller.findElementById(vm.bank_items_left[index].id, 'L', vm.bank_list);
                item.current--;
                vm.bank_items_left.splice(index, 1)
            } else {
                let item = antragsteller.findElementById(vm.bank_items_right[index].id, 'R', vm.bank_list);
                item.current--;
                vm.bank_items_right.splice(index, 1)
            }
        }

        function checkMaxInBanks(item) {
            return item.max > item.current;
        }

        function addBankverbindung() {
            vm.bankverbindungs.push({
                _delete: deleteBankverbindung
            });
        }

        function deleteBankverbindung(index) {
            vm.bankverbindungs.splice(index, 1);
        }

        function addWis() {
            vm.wis.push({
                darlehens: [],
                _delete: deleteWis
            });
        }

        function deleteWis(index) {
            vm.wis.splice(index, 1);
        }

        function clearWis() {
            vm.wis = [];
        }
    }

})();