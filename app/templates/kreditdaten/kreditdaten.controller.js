;(function () {

    'use strict';

    angular.module('app')
        .controller('KreditdatenController', KreditdatenController);

    KreditdatenController.$inject = ['$scope'];


    function KreditdatenController($scope) {
        let vm = this;
        vm.data={};
        vm.antrags = [];
        vm.addAntrag = addAntrag;
        vm.deleteAntrag = deleteAntrag;


        function addAntrag() {
            vm.antrags.push({
                _delete: deleteAntrag
            });
        }

        function deleteAntrag(index) {
            vm.antrags.splice(index, 1);
        }


    }

})();