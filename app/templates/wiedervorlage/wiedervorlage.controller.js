;(function () {

    'use strict';

    angular.module('app')
        .controller('WiedervorlageController', WiedervorlageController);

    WiedervorlageController.$inject = ['$scope', '$stateParams', 'vorgangsmanagement', 'wiedervorlage'];


    function WiedervorlageController($scope, $stateParams, vorgangsmanagement, wiedervorlage) {
        let vm = this;
        vm.bearbeiters = vorgangsmanagement.bearbeiters;
        vm.wiedervolages = vorgangsmanagement.wiedervolages;
        vm.openComment = openComment;
        vm.getRecortdByFilter = getRecortdByFilter;
        vm.filter = {};
        vm.commentVisible = false;
        // function getRecordsById() {
        //     wiedervorlage.getData({username: vm.filter.username}).then(function (res) {
        //         vm.wiedervolages = res.wiedervolages;
        //     });
        //     console.log();
        // }

        function openComment() {
            vm.commentVisible = true;
        }

        function getRecortdByFilter() {
            wiedervorlage.getData(vm.filter).then(function (res) {
                vm.wiedervolages = res.wiedervolages;
            });
        }


    }
})();