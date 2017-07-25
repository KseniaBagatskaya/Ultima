;(function () {

    'use strict';

    angular.module('app')
        .controller('KreditdatenController', KreditdatenController);

    KreditdatenController.$inject = ['$scope', '$rootScope', 'kreditdaten', '$stateParams', 'url', 'http', 'kreditdaten_data', 'toastr', 'antragsteller', 'allBanks'];


    function KreditdatenController($scope, $rootScope, kreditdaten, $stateParams, url, http, kreditdaten_data, toastr, antragsteller, allBanks) {
        let vm = this;
        vm.isSubmited = false;
        vm.deletseAntrag = deleteAntrag;
        vm.convertDateFromString = antragsteller.convertDateFromString;
        vm.addAntrag = addAntrag;
        vm.deleteAntrag = deleteAntrag;
        vm.submit = submit;
        vm.banks = allBanks;
        vm.userCredentials = JSON.parse(sessionStorage.getItem('user_credentials'));
        vm.entryVorgang = JSON.parse(sessionStorage.getItem('entrie_vorgang')) || {};
        vm.data = {
            datum: new Date(),
            wunsch: vm.entryVorgang.Finanzbedarf || '',
            auftragseingang: vm.entryVorgang.Kontaktart || '',
            antrags: [],
            banks: vm.banks
        };

        $scope.$watch("vm.data", debounce(submit, 1000), true);

        if (kreditdaten_data) {
            vm.data = kreditdaten_data;
            vm.data.entryId = $stateParams.id;
        }


        function addAntrag() {
            vm.data.antrags.push({
                _delete: deleteAntrag
            });
        }

        function deleteAntrag(index) {
            vm.data.antrags.splice(index, 1);
        }

        function submit() {
            vm.data.entryId = $stateParams.id;
            console.log(vm.data)
            kreditdaten.update(vm.data);
        }

        function debounce(func, wait, immediate) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
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
