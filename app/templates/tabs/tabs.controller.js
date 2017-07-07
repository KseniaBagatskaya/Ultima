;(function () {

    'use strict';

    angular.module('app')
        .controller('TabsController', TabsController);

    TabsController.$inject = ['$scope', '$state', '$rootScope'];


    function TabsController($scope, $state, $rootScope) {
        var vm = this;

        vm.params_id = $state.params.id;
        vm.current_controller = $state.current.controller;
        
        // if state changed relect active tab
        $rootScope.$on('$stateChangeStart',
        (event, toState, toParams, fromState, fromParams) => {
            vm.current_controller = toState.controller;
            vm.params_id = fromParams.id;
        })

    }

})();