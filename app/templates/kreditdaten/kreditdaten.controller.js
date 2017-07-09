;(function () {

    'use strict';

    angular.module('app')
        .controller('KreditdatenController', KreditdatenController);

    KreditdatenController.$inject = ['$scope', 'kreditdaten', '$stateParams', 'url', 'http', 'kreditdaten_data'];


    function KreditdatenController($scope, kreditdaten, $stateParams, url, http, kreditdaten_data) {
        let vm = this;

        vm.deleteAntrag = deleteAntrag;

        if ($stateParams.id && kreditdaten_data) {
            console.log(kreditdaten_data.data)
            vm.data = kreditdaten_data.data;
            vm.antrags = kreditdaten_data.data.antrags;
        } else {
            vm.data={
                erstelltam: new Date(),
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

        function submit() {
            const requestConfig = {
                url: null,
                data: {
                    erstelltam: vm.data.erstelltam,
                    antrags: vm.antrags,
                },
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
                    } else {
                        for(var key in res.msg) {
                            toastr.error(res.msg[key][0], 'Submit failed');
                        }
                    }
                });
            console.log(vm.antrags);
        }

    }

})();