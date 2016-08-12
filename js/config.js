// config.js

//----------------------------------------------------------------------------
// mkd-docreader configuration
//----------------------------------------------------------------------------

// Default documentation
var docname = 'cadastrapp_wiki'; // Name of default configuration documentation

// List of documentations enabled
var docs = [{
    docname: 'cadastrapp_wiki',
    // Elements to display
    header: 1, // Display header
    footer: 1, // Display footer
    sidebar: 1, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "GitHub Wiki Reader", // HTML page name
    project_name: "GitHub Wiki Reader", // Project name
    slogan: "Documentation of cadastrapp", // Slogan
    copyright: '&copy, 2016 <a href="https://georchestra.org">geOrchestra</a> / <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/georchestra/cadastrapp', // Footer Github link
    about_href: '#', // Footer about link
    contact_href: 'mailto:...', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: '', // Lang for GitBook
    gh_user: 'georchestra', // Github user or empty
    gh_repos: 'cadastrapp', // Github repos or empty
    gh_branch: 'wiki', // Github branch, 'wiki' for Github wiki or empty
    menu_page: '_Sidebar.md', // Page to display menu
    default_page: 'Home.md', // Page loaded by default
}, {
    docname: 'mkd-docreader',
    // Elements to display
    header: true, // Display header
    footer: true, // Display footer
    sidebar: true, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "GitHub Documentation Reader", // HTML page name
    project_name: "GitHub Documentation Reader", // Project name
    slogan: "Documentation of mkd-docreader", // Slogan
    copyright: '&copy, 2016 <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/cigalsace/mkd-docreader', // Footer Github link
    about_href: '#', // Footer about link
    contact_href: 'mailto:guillaume.ryckelynck@region-alsace.eu', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: '', // Lang for GitBook
    gh_user: 'cigalsace', // Github user or empty
    gh_repos: 'mkd-docreader', // Github repos or empty
    gh_branch: 'master', // Github branch, 'wiki' for Github wiki or empty
    menu_page: '', // Page to display menu
    default_page: 'README.md', // Page loaded by default
}];

var proxy_url = 'php/index.php'; // URL of proxy for cross-domain


//----------------------------------------------------------------------------
// Get URL parameters and define config variable
//----------------------------------------------------------------------------

// Get URL paramters
var params = getParamsURL(window.location.search.substring(1));

// Get docname parameter
if ('docname' in params) {
    docname = params.docname;
}
// Define config var according docname parameter
var config;
for (var i = 0; i < docs.length; i += 1) {
    var name = docs[i].docname;
    if (name == docname) {
        config = docs[i];
    }
}

// Manage params query
params_list = ['header', 'footer', 'sidebar'];
for (var i = 0; i < params_list.length; i += 1) {
    var param = params_list[i];
    if (param in params) {
        if (['false', '0'].indexOf(params[param]) > -1) {
            config[param] = false;
        } else {
            config[param] = params[param];
        }
    }
}
