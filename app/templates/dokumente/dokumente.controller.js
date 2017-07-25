;(function () {

    'use strict';

    angular.module('app')
        .controller('DokumenteController', DokumenteController);

    DokumenteController.$inject = ['$scope', '$state', '$stateParams', 'documents_data', 'dokument', 'http', 'url'];


    function DokumenteController($scope, $state, $stateParams, documents_data, dokument, http, url) {
        var vm = this;
        vm.id = $stateParams.id;
        vm.documents = documents_data;
        vm.addDocument = addDocument;
        vm.file = null;
        vm.userCredentials = JSON.parse(sessionStorage.getItem('user_credentials'));
        vm.redirectUrl = location.href;

        function addDocument(e) {
            const formData = new FormData();
            formData.append('Upload', document.getElementById("file-id").files[0]);
            formData.append('Id', vm.id);
            dokument.uploadDoc(formData);
        }


    }

})();