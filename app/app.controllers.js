//----------------------------------------------------------------------------
// app.controllers.js
//----------------------------------------------------------------------------
// angular
//     .module('app.controllers', []);


//----------------------------------------------------------------------------
// app.controllers.AppCtrl.js
// Main App Controller
//----------------------------------------------------------------------------

angular
    .module('app')
    .controller('AppCtrl', AppCtrl);

AppCtrl.$inject = ['$location', '$uibModal', 'ConfigSrv', 'PageSrv', 'AppDataSrv'];

function AppCtrl($location, $uibModal, ConfigSrv, PageSrv, AppDataSrv) {
    var vm = this;
    vm.data = AppDataSrv;

    vm.changeLang = function(lang) {
        vm.data.config.doc.lang = lang;
        vm.data.sidebar_url = PageSrv.getUrl(vm.data.config.doc.menu_page);
        vm.data.content_url = PageSrv.getUrl(vm.data.config.doc.default_page);
    };

    vm.changeDoc = function(data) {
        ConfigSrv.getConfig(data);
        vm.changeLang(vm.data.config.doc.lang);
    };

    if (!vm.data.firstLoaded) {
        vm.changeDoc({docname: false, firstLoad: true});
        vm.data.firstLoaded = true;
    }

    // Modal window
    vm.openModal = function(page) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: page,
            controller: 'ModalCtrl as modal',
            //size: size,
            resolve: {
                info: function() {
                    return AppDataSrv;
                }
            }
        });
    };
}


//----------------------------------------------------------------------------
// app.controllers.ModalInstanceCtrl.js
// Modal Instance Controller
//----------------------------------------------------------------------------

angular
    .module('app')
    .controller('ModalCtrl', ModalCtrl);

ModalCtrl.$inject = ['$uibModalInstance', 'AppDataSrv'];

function ModalCtrl($uibModalInstance, AppDataSrv) {
    var vm = this;
    vm.info = AppDataSrv;

    vm.ok = function () {
        $uibModalInstance.close();
    };
}
