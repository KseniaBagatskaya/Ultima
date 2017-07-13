;(function () {

    'use strict';

    angular.module('app')
        .controller('DokumenteController', DokumenteController);

    DokumenteController.$inject = ['$scope', '$state', '$stateParams', 'documents_data', 'dokument', 'http', 'url'];


    function DokumenteController($scope, $state, $stateParams, documents_data, dokument, http, url) {
        var vm = this;
        vm.documents = documents_data;
        vm.addDocument = addDocument;
        vm.file = null;

        function addDocument() {

        }

        console.log(documents_data);

    }

})();