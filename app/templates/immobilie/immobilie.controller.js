;(function () {

    'use strict';

    angular.module('app')
        .controller('ImmobilieController', ImmobilieController);

    ImmobilieController.$inject = ['$scope'];


    function ImmobilieController($scope) {
        var vm = this;
        vm.immobilieObject = {
            wofur: 'Neubau (eigenes Bauvorhaben)',
            basisangaben: {
                stabe: '',
                nr: '',
                plz: '',
                ort: '',
                art: '',
                grundstucksgrobe: '',
                einliegerwonhnung: '',
                baujahr: '',
                anzahl: '',
                bauweise: '',
                fertighaus: '',
                keller: '',
                dachgeschoss: '',
            }
        }

    }

})();