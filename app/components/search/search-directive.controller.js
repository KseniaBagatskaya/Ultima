;(function () {

    'use strict';

    angular.module('app')
        .controller('SearchDirectiveController', SearchDirectiveController);

    SearchDirectiveController.$inject = ['$scope'];


    function SearchDirectiveController($scope) {
        let vm = this;
        vm.modal = $scope.parent;
        vm.toggle = toggle;

        function toggle() {
            vm.modal.isOpened = false;
        }
    }

})();