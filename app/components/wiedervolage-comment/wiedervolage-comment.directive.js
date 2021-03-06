;(function () {

    'use strict';

    angular.module('directive.wiedervolage-comment', [])
        .directive('wiedervolageComment', weitereDarlehen);


    function weitereDarlehen() {
        return {
            restrict: 'E',
            scope: {
                parent: '=',
                index: '@'
            },
            templateUrl: 'components/wiedervolage-comment/wiedervolage-comment.html',
            controller: 'WiedervolageComment',
            controllerAs: 'vm',
            link: function (scope, elem, attrs) {
                console.log(scope);
            }
        };
    }
})();