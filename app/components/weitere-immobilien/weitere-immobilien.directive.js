;(function () {

    'use strict';

    angular.module('directive.weitere-immobilien', [])
        .directive('weitereImmobilien', weitereImmobilien);


    function weitereImmobilien() {
        return {
            restrict: 'E',
            scope: {
                parent: '=',
                index: '@'
            },
            templateUrl: 'components/weitere-immobilien/weitere-immobilien.html',
            controller: 'WeitereImmobilienController',
            controllerAs: 'vm',
            link: function (scope, elem, attrs) {
                console.log(scope);
            }
        };
    }
})();