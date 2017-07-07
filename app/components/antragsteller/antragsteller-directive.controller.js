;(function () {

    'use strict';

    angular.module('app')
        .controller('AntragstellerDirectiveController', AntragstellerDirectiveController);

    AntragstellerDirectiveController.$inject = ['$scope'];


    function AntragstellerDirectiveController($scope) {
        let vm = this;
        vm.parent= JSON.parse($scope.parent);

        // console.log($scope);
    }

})();