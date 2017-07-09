;(function () {

    'use strict';

    angular.module('model.antragsteller', [])
        .service('antragsteller', antragsteller);

    antragsteller.$inject = ['http', 'url', '$stateParams'];

    function antragsteller(http, url, $stateParams) {

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
        const MENU_RIGHT = [
            {
                name: 'Mietausgaben',
                max: 1,
                current: 0,
                id: 'Mietausgaben',
                items: []
            },
            {
                name: 'Unterhaltsverpflichtungen',
                max: 3,
                current: 0,
                id: 'Unterhaltsverpflichtungen',
                items: []
            },
            {
                name: 'Private Krankenversicherung',
                max: 1,
                current: 0,
                id: 'PrivateKrankenversicherung',
                items: []
            },
            {
                name: 'Sonstige Ausgaben',
                max: 1,
                current: 0,
                id: 'SonstigeAusgaben',
                items: []
            },
            {
                name: 'Sonstige Versicherungsausgaben',
                max: 1,
                current: 0,
                id: 'SonstigeVersicherungsausgaben',
                items: []
            },
            {
                name: 'Ratenkredit / Leasing',
                max: 3,
                current: 0,
                id: 'RatenkreditLeasing',
                items: []
            },
            {
                name: 'Privates Darlehen',
                max: 3,
                current: 0,
                id: 'PrivatesDarlehen',
                items: []
            },
            {
                name: 'Sonstige Verbindlichkeiten',
                max: 1,
                current: 0,
                id: 'SonstigeVerbindlichkeiten',
                items: []
            }
        ];

        let service = {
            menu: {left: MENU_LEFT, right: MENU_RIGHT},
            findElementById: _findElementById,
            getData: getData
        };
        return service;


        function getData(id) {
            let data = {
                entryId: id
            };
            return http.get(url.anstragsteller.index, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

        function _findElementById(id, side, bank_list) {
            let result;
            if (side === 'L') {
                bank_list.left.some(function (item) {
                    if (item.id === id) {
                        result = item;
                        return true;
                    }

                })
            } else {
                bank_list.right.some(function (item) {
                    if (item.id === id) {
                        result = item;
                        return true;
                    }
                })
            }
            return result;
        }
    }

})();