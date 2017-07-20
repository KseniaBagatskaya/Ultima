;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragstellerController', AntragstellerController);

    AntragstellerController.$inject = ['$scope', '$rootScope', '$stateParams', 'antragsteller', 'bank_list', 'http', 'url', 'toastr', 'antrag_data', '$state'];


    function AntragstellerController($scope, $rootScope, $stateParams, antragsteller, bank_list, http, url, toastr, antrag_data, $state) {
        let vm = this;

        vm.submit = submit;
        vm.addKinder = addKinder;
        vm.deleteKinder = deleteKinder;
        vm.deleteBankverbindung = deleteBankverbindung;
        vm.deleteWis = deleteWis;
        vm.clearKinder = clearKinder;
        vm.addItem = addItem;
        vm.checkMaxInBanks = checkMaxInBanks;
        vm.addBankverbindung = addBankverbindung;
        vm.addWis = addWis;
        vm.clearWis = clearWis;
        vm._deleteBank = deleteItem;
        vm.entryObject = {
            antragstellers: [
                {antragsteller1: {}},
                {antragsteller2: {}},
            ],
            banks: [],
            kinders: [],
            bankverbindungs: [],
            wis: [],
        }

        vm.bank_list = bank_list;

        $rootScope.$on('AntragstellerSubmit', function (event, data) {
            vm.submit(data.nextState);
        });


        $scope.$watch("vm.entryObject", debounce(submit, 1000), true);

        if (antrag_data) {
            vm.entryObject.entryid = $stateParams.id;
            vm.entryObject.antragstellers = antrag_data.antragstellers;
            vm.entryObject.kinders = antrag_data.Kinders || [];
            vm.entryObject.banks  = antrag_data.banks || [];
            vm.entryObject.bankverbindungs = antrag_data.bankverbindungs || [];
            vm.entryObject.wis = antrag_data.wis || [];
        }

        function submit(nextState) {
            antragsteller.update(vm.entryObject);
        }

        function addKinder() {
            vm.entryObject.kinders.push({
                _delete: deleteKinder
            });
        }

        function deleteKinder(index) {
            vm.entryObject.kinders.splice(index, 1);
        }

        function clearKinder() {
            vm.entryObject.kinders = [];
        }

        function addItem(item, side) {
            if (item.max > item.current) {
                item.current++;
                let tmpItem = {
                    identify: item.identify,
                    _delete: deleteItem,
                    side: side
                };
                vm.entryObject.banks.push(tmpItem);
            }
        }

        function deleteItem(index, side) {
            if (side === 'L') {
                let item = antragsteller.findElementById(vm.entryObject.banks[index].identify, 'L', vm.bank_list);
                item.current--;
                vm.entryObject.banks.splice(index, 1)
            } else {
                let item = antragsteller.findElementById(vm.entryObject.banks[index].identify, 'R', vm.bank_list);
                item.current--;
                vm.entryObject.banks.splice(index, 1)
            }
        }

        function checkMaxInBanks(item) {
            return item.max > item.current;
        }

        function addBankverbindung() {
            vm.entryObject.bankverbindungs.push({
                _delete: deleteBankverbindung
            });
        }

        function deleteBankverbindung(index) {
            vm.entryObject.bankverbindungs.splice(index, 1);
        }

        function addWis() {
            vm.entryObject.wis.push({
                darlehens: [],
                _delete: deleteWis
            });
        }

        function deleteWis(index) {
            vm.entryObject.wis.splice(index, 1);
        }

        function clearWis() {
            vm.entryObject.wis = [];
        }

        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };

    }

})();