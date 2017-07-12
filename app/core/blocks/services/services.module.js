;(function () {
    'use strict';

    angular.module('app.services', [
        'app.dashboard',

        'model.antragsteller',
        'model.immobilie',
        'model.kreditdaten',
        'model.dokument',
        'model.banks',
    ]);

})();