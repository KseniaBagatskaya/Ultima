;(function () {

    'use strict';

    angular.module('app')
        .controller('NutzungDirectiveController', NutzungDirectiveController);

    NutzungDirectiveController.$inject = ['$scope'];


    function NutzungDirectiveController($scope) {
        let vm = this;
        vm.nutzung = $scope.nutzung;
        vm.zusatzliche = $scope.zusatzliche;
    }

})();