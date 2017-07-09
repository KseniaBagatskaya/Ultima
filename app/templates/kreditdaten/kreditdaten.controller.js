;(function () {

    'use strict';

    angular.module('app')
        .controller('KreditdatenController', KreditdatenController);

    KreditdatenController.$inject = ['$scope', 'kreditdaten', '$stateParams', 'url'];


    function KreditdatenController($scope, kreditdaten, $stateParams, url) {
        let vm = this;
        vm.data={
            erstelltam: new Date(),
        };
        vm.antrags = [];
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
            console.log(vm.antrags);
        }

    }

})();