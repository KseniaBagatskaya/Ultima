;(function () {

    'use strict';

    angular.module('app')
        .controller('BriefvorlagenController', BriefvorlagenController);

    BriefvorlagenController.$inject = ['$scope', 'briefvorlagen', 'templates'];


    function BriefvorlagenController($scope, briefvorlagen, templates) {
        let vm = this;
        vm.save = save;
        vm.templates = templates;
        console.log(templates);


        function save() {

        }

    }

})();