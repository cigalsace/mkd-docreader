//----------------------------------------------------------------------------
// app.factories.js
//----------------------------------------------------------------------------

// angular
//     .module('app.factories', []);

//----------------------------------------------------------------------------
// app.factories.AppDataSrv.js
// App Data Management Factory
//----------------------------------------------------------------------------

angular
    .module('app')
    .factory('AppDataSrv', AppDataSrv);

function AppDataSrv() {
    return {
        config: {
            docname: docname,
            proxy_url: proxy_url,
            docs: docs,
            help_page: help_page
        },
        content_url: '',
        sidebar_url: '',
    };
}

//----------------------------------------------------------------------------
// app.factories.ConfigSrv.js
// App Config Data Management Factory
//----------------------------------------------------------------------------
angular
    .module('app')
    .factory('ConfigSrv', ConfigSrv);

ConfigSrv.$inject = ['$location', 'AppDataSrv'];

function ConfigSrv($location, AppDataSrv) {
    return {
        getConfig: getConfig
    };

    function getConfig(data) {
        var config = AppDataSrv.config;
        
        // Get URL paramters
        var params = {};
        if (data.firstLoad) {
            params = $location.search();
        }
        console.log(params);

        // Get docname parameter
        var docname = data.docname;
        if (! docname) {
            if ('docname' in params) {
                docname = params.docname;
            } else {
                docname = config.docname;
            }
        }
        // Define docname params URL
        $location.search('docname', docname);
        
        // Define config var according docname parameter
        var doc = {};
        for (var i = 0; i < config.docs.length; i += 1) {
            var name = docs[i].docname;
            if (name == docname) {
                doc = docs[i];
            }
        }
        // Manage params query
        var params_list = ['header', 'footer', 'sidebar'];
        for (i = 0; i < params_list.length; i += 1) {
            var param = params_list[i];
            doc[param] = doc[param]; // default value
            if (param in params) {
                if (['false', '0'].indexOf(params[param]) > -1) {
                    doc[param] = 0;
                } else {
                    doc[param] = 1;
                }
            }
            // Define param URL
            $location.search(param, doc[param]);
        }

        var cfg = AppDataSrv.config;
        cfg.doc = doc;
    }
}


//----------------------------------------------------------------------------
// app.factories.PageSrv.js
// Page Factory
//----------------------------------------------------------------------------

angular
    .module('app')
    .factory('PageSrv', PageSrv);

PageSrv.$inject = ['$http', 'AppDataSrv'];

function PageSrv($http, AppDataSrv) {
    return {
        getUrl: getUrl,
        getContent: getContent
    };

    function getUrl(page, hash) {
        hash = hash || '';
        var doc = AppDataSrv.config.doc;
        var url;
        if (doc.lang) {
            page = doc.lang + '/' + page;
        }
        if (doc.gh_branch) {
            if (doc.gh_branch == 'wiki') {
                url = doc.main_url + doc.gh_branch + '/' + doc.gh_user + '/' + doc.gh_repos + '/' + page;
            } else {
                url = doc.main_url + doc.gh_user + '/' + doc.gh_repos + '/' + doc.gh_branch + '/' + page;
            }
        } else {
            url = doc.main_url + page;
        }
        // Check for file extension
        if (url.substr(url.lastIndexOf('.') + 1) != doc.file_ext) {
            url = url + '.' + doc.file_ext;
        }
        return url + '#' + hash;
    }

    function getContent(full_url, hash) {
        var proxy_url = AppDataSrv.config.proxy_url;
        return $http.post(
                proxy_url, {
                    url: full_url
                })
            .success(function(data, status, headers, config) {
                return data.data;
            })
            .error(function(data, status, header, config) {
                return 'Content page "' + full_url + '" not found.';
            });
    }
}
