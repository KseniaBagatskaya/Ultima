;(function () {

    'use strict';

    angular.module('app')
        .controller('nutzungDirectiveController', nutzungDirectiveController);

    nutzungDirectiveController.$inject = ['$scope'];


    function nutzungDirectiveController($scope) {
        let vm = this;
        vm.data = $scope.parent;
        console.log(vm.data)
    }

})();