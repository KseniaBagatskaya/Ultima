;(function () {

    'use strict';

    angular.module('directive.anfrage', [])
        .directive('anfrage', antrag);


    function antrag() {
        return {
            restrict: 'E',
            scope: {
                parent: '=',
                index: '@'
            },
            templateUrl: 'components/anfrage/anfrage.html',
            controller: 'AnfrageController',
            controllerAs: 'vm',
            link: function (scope, elem, attrs) {

            }
        };
    }
})();