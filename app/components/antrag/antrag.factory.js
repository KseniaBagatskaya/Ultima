;(function () {
    angular.module('factory.antrag', [])
        .factory('antrag', Antrag);

    Antrag.$inject = [];

    function Antrag() {
        const model = {};
        model.privatDarlehen = {
            darlehensbetrag: 0,
            laufzeit: 0,
            restchuldversicherung: 0,
            vermittlungscourtage_percent: 0,
            vermittlungscourtage: function () {
                return this.darlehensbetrag * this.vermittlungscourtage_percent / 100;
            },
            antragssumme: function () {
                let result = (1 * this.darlehensbetrag) + (1 * this.restchuldversicherung) + (1 * this.vermittlungscourtage());
                return isNaN(result) ? 0 : result;

            },
            kreditgebuhren_nominalzins: 0,
            zinsbelastung: function () {
                result = this.antragssumme() * this.kreditgebuhren_nominalzins / 100;
                return isNaN(result) ? 0 : result;

            },
            gesamtkreditbetrag: function () {
                result = this.antragssumme() + this.zinsbelastung();
                return isNaN(result) ? 0 : result;

            },
            erste_rate_eur: function () {
                result = Math.round(this.gesamtkreditbetrag() / this.laufzeit);
                return isNaN(result) ? 0 : result;

            },
            letzte_rate: function () {
                result = this.gesamtkreditbetrag() - (this.erste_rate_eur() * (this.laufzeit - 1));
                return isNaN(result) ? 0 : result;

            }
        };
        return model;

    }
})();