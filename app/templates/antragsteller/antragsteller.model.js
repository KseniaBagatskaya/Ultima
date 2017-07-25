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
                identify: 'BankSparguthaben',
                items: []
            },
            {
                name: 'Wertpapiere / Aktien',
                max: 1,
                current: 0,
                identify: 'WertpapiereAktien',
                items: []
            },
            {
                name: 'Bausparvertrag',
                max: 3,
                current: 0,
                identify: 'Bausparvertrag',
                items: []
            },
            {
                name: 'Lebens-/ Rentenversicherung',
                max: 3,
                current: 0,
                identify: 'LebensRentenversicherung',
                items: []
            },
            {
                name: 'Sparpläne',
                max: 1,
                current: 0,
                identify: 'Sparplane',
                items: []
            },
            {
                name: 'Sonstiges Vermögen',
                max: 1,
                current: 0,
                identify: 'SonstigesVermogen',
                items: []
            },
            {
                name: 'Einkünfte aus Nebentätigkeit',
                max: 3,
                current: 0,
                identify: 'EinkunfteNebentatigkeit',
                items: []
            },
            {
                name: 'Unbefristete Zusatzrente',
                max: 1,
                current: 0,
                identify: 'UnbefristeteZusatzrente',
                items: []
            },
            {
                name: 'Ehegattenunterhalt',
                max: 1,
                current: 0,
                identify: 'Ehegattenunterhalt',
                items: []
            },
            {
                name: 'Variable Einkünfte',
                max: 1,
                current: 0,
                identify: 'VariableEinkunfte',
                items: []
            },
            {
                name: 'Sonstige Einnahmen',
                max: 1,
                current: 0,
                identify: 'SonstigeEinnahmen',
                items: []
            }
        ];
        const MENU_RIGHT = [
            {
                name: 'Mietausgaben',
                max: 1,
                current: 0,
                identify: 'Mietausgaben',
                items: []
            },
            {
                name: 'Unterhaltsverpflichtungen',
                max: 3,
                current: 0,
                identify: 'Unterhaltsverpflichtungen',
                items: []
            },
            {
                name: 'Private Krankenversicherung',
                max: 1,
                current: 0,
                identify: 'PrivateKrankenversicherung',
                items: []
            },
            {
                name: 'Sonstige Ausgaben',
                max: 1,
                current: 0,
                identify: 'SonstigeAusgaben',
                items: []
            },
            {
                name: 'Sonstige Versicherungsausgaben',
                max: 1,
                current: 0,
                identify: 'SonstigeVersicherungsausgaben',
                items: []
            },
            {
                name: 'Ratenkredit / Leasing',
                max: 3,
                current: 0,
                identify: 'RatenkreditLeasing',
                items: []
            },
            {
                name: 'Privates Darlehen',
                max: 3,
                current: 0,
                identify: 'PrivatesDarlehen',
                items: []
            },
            {
                name: 'Sonstige Verbindlichkeiten',
                max: 1,
                current: 0,
                identify: 'SonstigeVerbindlichkeiten',
                items: []
            }
        ];

        let service = {
            menu: {left: MENU_LEFT, right: MENU_RIGHT},
            findElementById: _findElementById,
            getData: getData,
            convertDateFromString: convertDateFromString,
            update: update,
        };
        return service;


        function getData(Id) {
            let data = {
                Id: Id
            };
            return http.get(url.anstragsteller.index, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

        function update(data) { 
            return http.post(url.anstragsteller.update, data)
                .then(function (res) {
                    console.log(res, 'res');
                    return res;
                });
        }

        function _findElementById(id, side, bank_list) {
            let result;
            if (side === 'L') {
                bank_list.left.some(function (item) {
                    if (item.identify === id) {
                        result = item;
                        return true;
                    }

                })
            } else {
                bank_list.right.some(function (item) {
                    if (item.identify === id) {
                        result = item;
                        return true;
                    }
                })
            }
            return result;
        }

        function convertDateFromString(date) {
            if(date!==null){
                return new Date(date);
            }else{
                return new Date();
            }
        }
    }

})();