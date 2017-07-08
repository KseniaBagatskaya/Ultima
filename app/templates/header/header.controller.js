;(function () {

    'use strict';

    angular.module('app')

        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', '$state'];
    function HeaderController($scope, $state) {

        let vm = this;
        vm.logout = logout;
        vm.modal = {
            isOpened: false,
            toggleModal: _toggleModal,
            suggestions: [],
        }

        function logout() {
            sessionStorage.removeItem('user');
            $state.go('login');
        }

        function _toggleModal() {
            console.log(vm.modal.isOpened)
            vm.modal.isOpened = !vm.modal.isOpened;
        }

    }


})();