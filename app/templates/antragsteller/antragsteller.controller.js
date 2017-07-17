;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragstellerController', AntragstellerController);

    AntragstellerController.$inject = ['$scope', '$rootScope', '$stateParams', 'antragsteller', 'bank_list', 'http', 'url', 'toastr', 'antrag_data', '$state'];


    function AntragstellerController($scope, $rootScope, $stateParams, antragsteller, bank_list, http, url, toastr, antrag_data, $state) {
        let vm = this;

        vm.submit = submit;
        vm.next = next;
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
        vm.isSubmited = false;

        vm.bank_list = bank_list;

        $rootScope.$on('AntragstellerSubmit', function (event, data) {
            vm.submit(data.nextState)
        });


        // $rootScope.$on('$stateChangeStart', 
        // function(event, toState, toParams, fromState, fromParams){ 
        //     if (!vm.isSubmited) {
        //         event.preventDefault();
        //         if (confirm('Änderungen speichern?')) {
        //             vm.submit();
        //             $state.go(toState);
        //         } else {
        //             vm.isSubmited = true;
        //             $state.go(toState, fromParams);
        //         }
        //     } else {
        //         $state.go(toState, fromParams);
        //     }
        // });

        if ($stateParams.id) {
            vm.antragsteller1 = antrag_data.antragstellers[0] || {};
            vm.antragsteller2 = antrag_data.antragstellers[1] || {};
            if (antrag_data.data) {
                vm.kinders = antrag_data.data.kinders || [];
                vm.bankverbindungs = antrag_data.data.bankverbindungs || [];
                vm.wis = antrag_data.data.wis || [];
                vm.bank_items_left = antrag_data.data.bank_items_left || [];
                vm.bank_items_right = antrag_data.data.bank_items_right || [];
            } else {
                vm.bank_items_left = [];
                vm.bank_items_right = [];
                vm.kinders = [];
                vm.bankverbindungs = [];
                vm.wis = [];
            }


        } else {
            vm.antragsteller1 = {
                number: '1',
                sex: '1',
            };
            vm.antragsteller2 = {
                number: '2',
                value: '1',
            };
            vm.bank_items_left = [];
            vm.bank_items_right = [];
            vm.kinders = [];
            vm.bankverbindungs = [];
            vm.wis = [];
        }

        function next() {

        }

        function submit(nextState) {

            const requestConfig = {
                url: null,
                data: {
                    kinders: vm.kinders,
                    bankverbindungs: vm.bankverbindungs,
                    wis: vm.wis,
                    banks: [],
                    antragstellers: [
                        vm.antragsteller1,
                        vm.antragsteller2,
                    ],
                }
            }
            const preparedData = JSON.parse(sessionStorage.getItem('entry'));
            if ($state.params.id) {
                requestConfig.url = url.dashboard.update_angrag;
                requestConfig.data.entryId = $state.params.id;
                requestConfig.data.bank_items_left = vm.bank_items_left;
                requestConfig.data.bank_items_right = vm.bank_items_right;
            } else {
                requestConfig.data.entry = preparedData;
                requestConfig.url = url.dashboard.create_angrag;
                vm.bank_items_left.map((value, key) => {
                    requestConfig.data.banks.push({
                        entryId: $stateParams.id,
                        bank_identify: value.identify,
                        side: 'L',
                        data: value,
                    });
                });
                vm.bank_items_right.map((value, key) => {
                    requestConfig.data.banks.push({
                        entryId: $stateParams.id,
                        bank_identify: value.identify,
                        side: 'R',
                        data: value,
                    });
                });
            }
            http.post(requestConfig.url, requestConfig.data)
                .then(function (res) {
                    if (res.status) {
                        vm.isSubmited = true;
                        if (!nextState) {
                            toastr.info('Created successfull');
                            $state.go('app.tabs.antragsteller', {id: res.id});
                        }
                    } else {
                        for (var key in res.msg) {
                            toastr.error(res.msg[key][0], 'Submit failed');
                        }
                    }
                });
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
                    identify: item.identify,
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
                let item = antragsteller.findElementById(vm.bank_items_left[index].identify, 'L', vm.bank_list);
                item.current--;
                vm.bank_items_left.splice(index, 1)
            } else {
                let item = antragsteller.findElementById(vm.bank_items_right[index].identify, 'R', vm.bank_list);
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
            console.log(index);
            vm.wis.splice(index, 1);
        }

        function clearWis() {
            vm.wis = [];
        }

    }

})();