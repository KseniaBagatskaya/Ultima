;(function () {

    'use strict';

    angular.module('model.antragsteller', [])
        .service('antragsteller', antragsteller);

    antragsteller.$inject = [];

    function antragsteller() {

        const MENU_LEFT = [
            {
                name: 'Bank- und Sparguthaben',
                max: 1,
                current: 0,
                id: 'BankSparguthaben',
                items: []
            },
            {
                name: 'Wertpapiere / Aktien',
                max: 1,
                current: 0,
                id: 'WertpapiereAktien',
                items: []
            },
            {
                name: 'Bausparvertrag',
                max: 3,
                current: 0,
                id: 'Bausparvertrag',
                items: []
            },
            {
                name: 'Lebens-/ Rentenversicherung',
                max: 3,
                current: 0,
                id: 'LebensRentenversicherung',
                items: []
            },
            {
                name: 'Sparpläne',
                max: 1,
                current: 0,
                id: 'Sparplane',
                items: []
            },
            {
                name: 'Sonstiges Vermögen',
                max: 1,
                current: 0,
                id: 'SonstigesVermogen',
                items: []
            },
            {
                name: 'Einkünfte aus Nebentätigkeit',
                max: 3,
                current: 0,
                id: 'EinkunfteNebentatigkeit',
                items: []
            },
            {
                name: 'Unbefristete Zusatzrente',
                max: 1,
                current: 0,
                id: 'UnbefristeteZusatzrente',
                items: []
            },
            {
                name: 'Ehegattenunterhalt',
                max: 1,
                current: 0,
                id: 'Ehegattenunterhalt',
                items: []
            },
            {
                name: 'Variable Einkünfte',
                max: 1,
                current: 0,
                id: 'VariableEinkunfte',
                items: []
            },
            {
                name: 'Sonstige Einnahmen',
                max: 1,
                current: 0,
                id: 'SonstigeEinnahmen',
                items: []
            }
        ];
        const MENU_RIGHT = [];

        let service = {
            menu: {left: MENU_LEFT, right: MENU_RIGHT}
        };
        return service;

    }

})();