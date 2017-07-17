;(function () {

    'use strict';

    angular.module('app')
        .controller('TabsController', TabsController);

    TabsController.$inject = ['$scope', '$state', '$rootScope', '$stateParams'];


    function TabsController($scope, $state, $rootScope, $stateParams) {
        var vm = this;

        vm.transactionId = sessionStorage.getItem('transactionId');
        vm.params_id = $state.params.id;
        vm.current_controller = $state.current.controller;

        // if state changed relect active tab
        $rootScope.$on('$stateChangeStart',
            (event, toState, toParams, fromState, fromParams) => {
                vm.current_controller = toState.controller;
                vm.params_id = toParams.id === '' ? fromParams.id : toParams.id;
                switch (fromState.controller) {
                    case 'AntragstellerController':
                        $rootScope.$emit('AntragstellerSubmit', {nextState: toState.name});
                        break;
                        case 'ImmobilieController':
                        $rootScope.$emit('ImmobilieSubmit', {nextState: toState.name});
                        break;
                        case 'KreditdatenController':
                        $rootScope.$emit('KreditdatenSubmit', {nextState: toState.name});
                        break;
                }
                // vm.params_id = fromParams.id;
            });


    }

})();