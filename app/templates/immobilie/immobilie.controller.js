;(function () {

    'use strict';

    angular.module('app')
        .controller('ImmobilieController', ImmobilieController);

    ImmobilieController.$inject = ['$scope', '$state', '$rootScope', '$stateParams', 'immobilie', 'url', 'http', 'immobilie_data', 'toastr'];


    function ImmobilieController($scope, $state, $rootScope, $stateParams, immobilie, url, http, immobilie_data, toastr) {
        var vm = this;
        vm.addStellplatze = addStellplatze;
        vm.addGrundbuchdaten = addGrundbuchdaten;
        vm.addFlurstuck = addFlurstuck;
        vm.deleteFlurstuck = deleteFlurstuck;
        vm.deleteStellplatze = deleteStellplatze;
        vm.addRechte = addRechte;
        vm.submit = submit;
        vm.isSubmited = false;
        $rootScope.$on('ImmobilieSubmit', function (event, data) {
            vm.submit(data.nextState)
        });

        if (immobilie_data) {
            vm.immobilieObject = immobilie_data;
        } else {
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
        }

        vm.menu = [
            {
                name: 'Stellplatz',
                current: 0,
                propId: 'Stellplatz',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Carport',
                current: 0,
                propId: 'Carport',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Garage',
                current: 0,
                propId: 'Garage',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Doppelgarage',
                current: 0,
                propId: 'Doppelgarage',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Kellergarage',
                current: 0,
                propId: 'Kellergarage',
                max: 100,
                vermietet: 0,
            },
            {
                name: 'Tiefgaragenstellplatz',
                current: 0,
                propId: 'Tiefgaragenstellplatz',
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

        function submit(nextState) {

            const requestConfig = {
                data: vm.immobilieObject
            }
            if ($stateParams.id) {
                requestConfig.data.entryid = $stateParams.id;
            }
            immobilie.update(requestConfig.data);
        }

        window.onbeforeunload = function(e) {
            vm.submit();
        };

    }

})();