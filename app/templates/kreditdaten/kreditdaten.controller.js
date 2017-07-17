;(function () {

    'use strict';

    angular.module('app')
        .controller('KreditdatenController', KreditdatenController);

    KreditdatenController.$inject = ['$scope', '$rootScope', 'kreditdaten', '$stateParams', 'url', 'http', 'kreditdaten_data', 'toastr'];


    function KreditdatenController($scope, $rootScope, kreditdaten, $stateParams, url, http, kreditdaten_data, toastr) {
        let vm = this;
        vm.isSubmited = false;
        vm.deleteAntrag = deleteAntrag;
        $rootScope.$on('KreditdatenSubmit', function (event, data) {
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
        //     }
        // });

        vm.entry = JSON.parse(sessionStorage.getItem('entry'));


        if ($stateParams.id && kreditdaten_data.data) {
            console.log(kreditdaten_data.data)
            vm.data = kreditdaten_data.data;
            vm.data.auftragseingang = kreditdaten_data.entry.kontaktartId;
            vm.data.wunsch = kreditdaten_data.entry.finanzbedarf;
            vm.antrags = kreditdaten_data.data.antrags || [];
        } else {
            vm.data = {
                erstelltam: new Date(),
                datum: new Date(),
                wunsch: vm.entry.finanzbedarf,
                auftragseingang: vm.entry.kontaktartId,
            };
            vm.antrags = [];
        }
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