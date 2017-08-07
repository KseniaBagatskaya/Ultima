;(function () {

    'use strict';

    angular.module('app')
        .controller('BriefvorlagenController', BriefvorlagenController);

    BriefvorlagenController.$inject = ['$scope'];


    function BriefvorlagenController($scope) {
        let vm = this;
        vm.save = save;


        function save() {

        }

    }

})();