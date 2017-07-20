;(function () {

    'use strict';

    angular.module('app')
        .controller('KreditdatenController', KreditdatenController);

    KreditdatenController.$inject = ['$scope', '$rootScope', 'kreditdaten', '$stateParams', 'url', 'http', 'kreditdaten_data', 'toastr', 'antragsteller'];


    function KreditdatenController($scope, $rootScope, kreditdaten, $stateParams, url, http, kreditdaten_data, toastr, antragsteller) {
        let vm = this;
        vm.isSubmited = false;
        vm.deletseAntrag = deleteAntrag;
        vm.convertDateFromString = antragsteller.convertDateFromString;

        $rootScope.$on('KreditdatenSubmit', function (event, data) {
            vm.submit(data.nextState)
        });

        // if ($stateParams.id && kreditdaten_data) {
        //     console.log(kreditdaten_data);
        //     vm.data = kreditdaten_data.data || {};
        //     vm.data.auftragseingang = kreditdaten_data.entry.kontaktartId;
        //     vm.data.wunsch = kreditdaten_data.entry.finanzbedarf;
        //     vm.antrags = kreditdaten_data.data.antrags || [];
        // } else {
            vm.data = {
                erstelltam: new Date(),
                datum: new Date(),
                wunsch: '',
                auftragseingang: '',
            };
            vm.antrags = [];
        // }
        vm.addAntrag = addAntrag;
        vm.deleteAntrag = deleteAntrag;
        vm.submit = submit;


        function addAntrag() {
            vm.antrags.push({
                _delete: deleteAntrag
            });
        }

        function deleteAntrag(index) {
            vm.antrags.splice(index, 1);
        }

        function submit(nextState) {
            vm.data.antrags = vm.antrags;
            const requestConfig = {
                url: null,
                data: vm.data,
            }
            if ($stateParams.id) {
                requestConfig.url = url.kreditdaten.update;
                requestConfig.data.entryId = $stateParams.id;
            } else {
                requestConfig.url = url.kreditdaten.create;
            }
            http.post(requestConfig.url, requestConfig.data)
                .then(function (res) {
                    if (res.status) {
                        console.log(res, 'res');
                        if (!nextState) {
                            toastr.info('Saved');

                        }
                    } else {
                        for (var key in res.msg) {
                            toastr.error(res.msg[key][0], 'Submit failed');
                        }
                    }
                    vm.isSubmited = false;
                });
        }

    }

})();