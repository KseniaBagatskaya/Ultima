;(function () {

    'use strict';

    angular.module('app')
        .controller('BasisangabenDirectiveController', BasisangabenDirectiveController);

    BasisangabenDirectiveController.$inject = ['$scope'];


    function BasisangabenDirectiveController($scope) {
        let vm = this;
        console.log($scope);
        vm.parent= JSON.parse($scope.parent);

    }

})();