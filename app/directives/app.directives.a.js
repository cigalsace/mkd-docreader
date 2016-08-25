//----------------------------------------------------------------------------
// app.directives.a.js
// Directive to manage click on link (<a></a> DOM element)
//----------------------------------------------------------------------------

angular
    .module('app')
    .directive('a', aClicked);

aClicked.$inject = ['AppDataSrv', 'PageSrv'];

function aClicked(AppDataSrv, PageSrv) {
    var directive = {
        restrict: 'E',
        link: link,
        controller: 'AppCtrl',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;

    function link(scope, element, attrs, vm) {
        init();

        function init() {
            var url = attrs.href;
            if (!url || url == '#') {
                return;
            }
            var externalRe = new RegExp("^(?:[a-z]+:)?\/\/", "i");

            element.on('click', function(e) {
                e.preventDefault();

                if (externalRe.test(url)) {
                    var win = window.open(encodeURI(url), '_blank');
                } else {
                    var page = encodeURI(decodeURIComponent(url.split("#")[0]));
                    var hash = encodeURI(decodeURIComponent(url.split("#")[1]));

                    scope.$apply(function() {
                        var data = AppDataSrv;
                        data.content_url = PageSrv.getUrl(page, hash);
                    });
                }
                return false;
            });
        }
    }
}
