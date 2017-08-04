;(function () {

    'use strict';

    angular.module('app')
        .controller('WiedervorlageController', WiedervorlageController);

    WiedervorlageController.$inject = ['$scope', '$stateParams', 'users', 'wiedervorlage'];


    function WiedervorlageController($scope, $stateParams, users, wiedervorlage) {
        let vm = this;
        vm.openComment = openComment;
        vm.getRecortdByFilter = getRecortdByFilter;
        vm.commentmain={};
        vm.vorgangs = [];
        vm.filter = {
            user: "All",
            uber: false,
            keine: false,
            heute: false,
            morgen: false,
            inden: false,
            spater: false,
            // user: false,
        };

        vm.getRecortdByFilter();
        vm.commentVisible = false;
        vm.users = users;

        function openComment(data) {
            vm.commentVisible = true;
            vm.commentmain=data;
        }

        function getRecortdByFilter() {
            console.log(vm.filter)
            wiedervorlage.getVorgangs(vm.filter).then(function (res) {
                vm.vorgangs = res;
                console.log(res);
                console.log('--------')
            });
        }


    }
})();