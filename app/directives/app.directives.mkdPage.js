//----------------------------------------------------------------------------
// app.directives.mkdPage.js
// Directive to display page in markdown format
// use: <div mkd-page mkd-type="content|sidebar"></div> 
//----------------------------------------------------------------------------

angular
    .module('app')
    .directive('mkdPage', mkdPage);

mkdPage.$inject = ['$compile', '$location', '$anchorScroll', 'PageSrv', 'AppDataSrv'];

function mkdPage($compile, $location, $anchorScroll, PageSrv, AppDataSrv) {
    var directive = {
        restrict: 'A',
        link: link,
        controller: 'AppCtrl',
        bindToController: true
    };
    return directive;

    function link(scope, element, attrs, vm) {
        var mkdType = attrs.mkdType;
        scope.$watch("vm.data['" + mkdType + "']", function(newVal, oldValue) {
            if (newVal || newVal !== oldValue) {
                var data = AppDataSrv;
                init(newVal);
            }
        });

        function init(page_url) {
            var hash = page_url.split("#")[1];
            // if (hash) {
                // hash = hash
            // } else {
                // hash = encodeURI(decodeURIComponent(page_url.split("#")[1]));
            // }
            PageSrv.getContent(page_url, hash)
                .then(function(response) {
                    var converter = new showdown.Converter();
                    console.log(showdown.getOptions());
                    console.log(converter.getOptions());

                    content = converter.makeHtml(response.data.content);

                    // Change image soource URL to get GitHub images from repos
                    var re_img1 = /src="https:\/\/github.com(.*)\/blob\/(.*)" /gi;
                    content = content.replace(re_img1, 'src="https://raw.githubusercontent.com$1/$2" ');
                    // Img with relative path
                    var re_img2 = /src="(?!http)(.*)" /gi;
                    content = content.replace(re_img2, 'src="'+AppDataSrv.config.doc.main_url+AppDataSrv.config.doc.gh_user+'/'+AppDataSrv.config.doc.gh_repos+'/'+AppDataSrv.config.doc.gh_branch+'/'+AppDataSrv.config.doc.lang+'/$1" ');

                    $location.hash('');
                    $anchorScroll.yOffset = 0;
                    if (hash !== 'undefined') {
                        console.log(hash);
                        $location.hash(hash);
                        $anchorScroll.yOffset = 70;
                    }
                    $anchorScroll();
                    
                    element.html(content);
                    $compile(element.contents())(scope);
                });
        }
    }
}
