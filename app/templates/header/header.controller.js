;(function () {

    'use strict';

    angular.module('app')

        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', '$state', 'users_data'];
    function HeaderController($scope, $state, users_data) {

        let vm = this;
        vm.logout = logout;
        vm.modal = {
            isOpened: false,
            toggleModal: _toggleModal,
            suggestions: [],
        }
        vm.users_data = users_data;

        function logout() {
            sessionStorage.removeItem('user');
            $state.go('login');
        }

        function _toggleModal() {
          var elem = angular.element('body').css('overflow', 'hidden');
            vm.modal.isOpened = !vm.modal.isOpened;
        }

    }


})();