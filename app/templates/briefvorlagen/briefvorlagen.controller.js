;(function () {

    'use strict';

    angular.module('app')
        .controller('BriefvorlagenController', BriefvorlagenController);

    BriefvorlagenController.$inject = ['$scope', 'briefvorlagen', 'templates'];


    function BriefvorlagenController($scope, briefvorlagen, templates) {
        let vm = this;
        vm.save = save;
        vm.templates = templates;
        vm.htmlContent= '';
        vm.onTemplateClick = onTemplateClick;
        vm.newTemplate = newTemplate;
        vm.id = false;
        vm.pdfDownload = pdfDownload;
        const doc = new jsPDF();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };


        function save() {
            if (!vm.id) {
                const name = prompt('Den Namen des Briefvorlage eingeben');
                if (name) {
                    const user = JSON.parse(sessionStorage.getItem('user'));
                    const requestParams = {
                        "Name": name,
                        "Content": vm.htmlContent,
                        "User": user.Benutzername,
                        "AuthKey": user.AuthKey,
                    }
                    if (vm.id) requestParams.Id = vm.id;
                    briefvorlagen.updateData(requestParams)
                        .then(function () {
                            briefvorlagen.getData()
                                .then(function (res) {
                                    vm.templates = res;
                                });
                        });
                }
            } else {
                const user = JSON.parse(sessionStorage.getItem('user'));
                const requestParams = {
                    "Id": vm.id,
                    "Name": vm.name,
                    "Content": vm.htmlContent,
                    "User": user.Benutzername,
                    "AuthKey": user.AuthKey,
                }
                briefvorlagen.updateData(requestParams)
                    .then(function () {
                        briefvorlagen.getData()
                            .then(function (res) {
                                vm.templates = res;
                            });
                    });
            }

        }

        function onTemplateClick(template) {
            vm.id = template.Id;
            vm.name = template.Name;
            vm.htmlContent = template.Content;
        }

        function newTemplate() {
            vm.id = false;
            vm.name = '';
            vm.htmlContent = '';
        }

        function pdfDownload() {
            doc.fromHTML(vm.htmlContent, 15, 15, {
                'width': 170,
                'elementHandlers': specialElementHandlers
            });
            const fileName = vm.name + '.pdf';
            doc.save(fileName);
            location.reload();
        }

    }

})();