;(function () {

    'use strict';

    angular.module('app')
        .controller('ImmobilieController', ImmobilieController);

    ImmobilieController.$inject = ['$scope'];


    function ImmobilieController($scope) {
        var vm = this;

        vm.addStellplatze = addStellplatze;
        vm.addGrundbuchdaten = addGrundbuchdaten;
        vm.addFlurstuck = addFlurstuck;
        vm.deleteFlurstuck = deleteFlurstuck;
        vm.addRechte = addRechte;
        vm.submit = submit;

        vm.immobilieObject = {
            wofur: 'Neubau (eigenes Bauvorhaben)',
            basisangaben: {
                strabe: '',
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
            },
            nutzung: {
                gesamte: '',
                wie: '',
                gewerbeflache: '',
            },
            zusatzliche: {
                erbbaurecht: '',
                wurde: '',
            },
            StellplatzeList: [],
            Grundbuchdaten: {
                isOpened: false,
                grunduch: '',
                blatt: '',
                Flurstuck: [],
            },
            Rechte: {
                isOpened: false,
                betrag: '',
                beschreibung: '',
                anmerkungen: '',
            }
        }

        vm.menu = [
            {
                name: 'Stellplatz',
                current: 0,
                id: 'Stellplatz',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Carport',
                current: 0,
                id: 'Carport',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Garage',
                current: 0,
                id: 'Garage',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Doppelgarage',
                current: 0,
                id: 'Doppelgarage',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Kellergarage',
                current: 0,
                id: 'Kellergarage',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Tiefgaragenstellplatz',
                current: 0,
                id: 'Tiefgaragenstellplatz',
                max: 100,
                vermietet: 0,
            }
        ];

        function deleteStellplatze(index) {
            vm.immobilieObject.StellplatzeList.splice(index, 1);
        }

        function addStellplatze(item) {
            console.log(vm.immobilieObject.StellplatzeList)
            item._delete = deleteStellplatze;
            vm.immobilieObject.StellplatzeList.push(item);
        }

        function addGrundbuchdaten() {
            vm.immobilieObject.Grundbuchdaten.isOpened = true;
        }

        function addFlurstuck() {
            vm.immobilieObject.Grundbuchdaten.Flurstuck.push({
                flur: '',
                flurstuck: '',
                anteil: '',
                anteil2: '',
                desFlurs: '',
            });
        }

        function deleteFlurstuck(index) {
            vm.immobilieObject.Grundbuchdaten.Flurstuck.splice(index, 1);
        }

        function addRechte() {
            vm.immobilieObject.Rechte.isOpened = true;
        }

        function submit() {
            console.log(vm.immobilieObject);
        }

    }

})();