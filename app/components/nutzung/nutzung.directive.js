;(function () {

    'use strict';

    angular.module('directive.nutzung', [])
        .directive('nutzung', nutzung);


    function nutzung() {
        return {
            restrict: 'E',
            scope: {
                parent: '=',
            },
            templateUrl: 'components/nutzung/nutzung.html',
            controller: 'NutzungDirectiveController',
            controllerAs: 'vm',
            link: function (scope, elem, attrs) {
            }
        };
    }
})();