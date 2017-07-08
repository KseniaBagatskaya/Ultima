;(function () {

    'use strict';

    angular.module('app')

        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope'];
    function HeaderController($scope) {

        let vm = this;
        vm.modal = {
            isOpened: false,
            toggleModal: _toggleModal,
            suggestions: [],
        }

        function _toggleModal() {
            console.log(vm.modal.isOpened)
            vm.modal.isOpened = !vm.modal.isOpened;
        }

    }


})();