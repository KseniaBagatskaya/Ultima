;(function () {

    'use strict';

    angular.module('app')
        .controller('WiedervolageComment', WiedervolageComment)

    WiedervolageComment.$inject = ['$scope'];

    function WiedervolageComment($scope) {
        let vm = this;
        vm.data = $scope.parent;
        console.log($scope);
    }

})();