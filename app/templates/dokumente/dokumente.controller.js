;(function () {

    'use strict';

    angular.module('app')
        .controller('DokumenteController', DokumenteController);

    DokumenteController.$inject = ['$scope', '$stateParams', 'documents_data', 'dokument'];


    function DokumenteController($scope, $stateParams, documents_data, dokument) {
        var vm = this;

        console.log(documents_data);

    }

})();