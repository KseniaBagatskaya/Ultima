;(function () {

    'use strict';

    angular.module('app')
        .controller('KinderController', KinderController)

    KinderController.$inject = ['$scope'];

    function KinderController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        vm.index = $scope.index;
        console.log(vm.data);

    }

})();