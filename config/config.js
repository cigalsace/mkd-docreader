//----------------------------------------------------------------------------
// config.js
// mkd-docreader configuration
//----------------------------------------------------------------------------

// Default documentation
var docname = 'cadastrapp_wiki'; // Name of default configuration documentation

// List of documentations enabled
var docs = [{
    docname: 'cadastrapp_wiki',
    description: 'Wiki du module geOrchestra "CadastrApp".',
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
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:...', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: '', // Default lang for GitBook
    gh_user: 'georchestra', // Github user or empty
    gh_repos: 'cadastrapp', // Github repos or empty
    gh_branch: 'wiki', // Github branch, 'wiki' for Github wiki or empty
    menu_page: '_Sidebar.md', // Page to display menu
    default_page: 'Home.md' // Page loaded by default
}, {
    docname: 'cadastrapp_userguide',
    description: 'Wiki du module geOrchestra "CadastrApp".',
    // Elements to display
    header: 1, // Display header
    footer: 1, // Display footer
    sidebar: 0, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "GitHub Wiki Reader", // HTML page name
    project_name: "GitHub Wiki Reader", // Project name
    slogan: "Documentation of cadastrapp", // Slogan
    copyright: '&copy, 2016 <a href="https://georchestra.org">geOrchestra</a> / <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/georchestra/cadastrapp', // Footer Github link
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:...', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: '', // Default lang for GitBook
    gh_user: 'georchestra', // Github user or empty
    gh_repos: 'cadastrapp', // Github repos or empty
    gh_branch: 'wiki', // Github branch, 'wiki' for Github wiki or empty
    menu_page: '_Sidebar.md', // Page to display menu
    default_page: 'Guide-Utilisateur.md' // Page loaded by default
}, {
    docname: 'mkd-docreader',
    description: '',
    // Elements to display
    header: true, // Display header
    footer: true, // Display footer
    sidebar: false, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "GitHub Documentation Reader", // HTML page name
    project_name: "GitHub Documentation Reader", // Project name
    slogan: "Documentation of mkd-docreader", // Slogan
    copyright: '&copy, 2016 <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/cigalsace/mkd-docreader', // Footer Github link
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:guillaume.ryckelynck@region-alsace.eu', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: '', // Default lang for GitBook
    gh_user: 'cigalsace', // Github user or empty
    gh_repos: 'mkd-docreader', // Github repos or empty
    gh_branch: 'master', // Github branch, 'wiki' for Github wiki or empty
    menu_page: '', // Page to display menu
    default_page: 'README.md' // Page loaded by default
}, {
    docname: 'mdguide',
    description: '',
    // Elements to display
    header: true, // Display header
    footer: true, // Display footer
    sidebar: false, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "GitHub Documentation Reader", // HTML page name
    project_name: "GitHub mdGuide Documentation", // Project name
    slogan: "Documentation of Metadata Guide", // Slogan
    copyright: '&copy 2016 <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/cigalsace/mdGuide', // Footer Github link
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:guillaume.ryckelynck@region-alsace.eu', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: 'fr', // Default lang for GitBook
    langs: [{
        label: 'Français',
        value: 'fr'
    }, {
        label: 'Anglais',
        value: 'en'
    }], // Languages for GitBook
    gh_user: 'cigalsace', // Github user or empty
    gh_repos: 'mdGuide', // Github repos or empty
    gh_branch: 'master', // Github branch, 'wiki' for Github wiki or empty
    menu_page: '', // Page to display menu
    default_page: 'doc.md' // Page loaded by default
}, {
    docname: 'georchestra-admin-book',
    description: 'Admin book for geOrchestra.',
    // Elements to display
    header: true, // Display header
    footer: false, // Display footer
    sidebar: true, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "GitHub Documentation Reader", // HTML page name
    project_name: "GitHub Documentation Reader", // Project name
    slogan: "Admin book for geOrchestra", // Slogan
    copyright: '&copy 2016 <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/georchestra/data-admin-book', // Footer Github link
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:guillaume.ryckelynck@region-alsace.eu', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: 'fr', // Default lang for GitBook
    langs: [{
        label: 'Français',
        value: 'fr'
    }, {
        label: 'Anglais',
        value: 'en'
    }, {
        label: 'Espagnol',
        value: 'es'
    }], // Languages for GitBook
    gh_user: 'georchestra', // Github user or empty
    gh_repos: 'data-admin-book', // Github repos or empty
    gh_branch: 'master', // Github branch, 'wiki' for Github wiki or empty
    menu_page: 'SUMMARY.md', // Page to display menu
    default_page: 'Introduction.md' // Page loaded by default
}, {
    docname: 'guide_decrire_donnees',
    description: 'Guide de description des données CIGAL.',
    // Elements to display
    header: false, // Display header
    footer: false, // Display footer
    sidebar: false, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "Guide CIGAL", // HTML page name
    project_name: "Guide CIGAL", // Project name
    slogan: "Comment décrire vos données", // Slogan
    copyright: '&copy 2016 <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/cigalsace/documentation', // Footer Github link
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:guillaume.ryckelynck@region-alsace.eu', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: 'guide_comment_decrire_donnees', // Default lang for GitBook
    langs: [{
        label: 'Français',
        value: 'guide_comment_decrire_donnees'
    }, {
        label: 'Anglais',
        value: 'en'
    }, {
        label: 'Espagnol',
        value: 'es'
    }], // Languages for GitBook
    gh_user: 'cigalsace', // Github user or empty
    gh_repos: 'documentation', // Github repos or empty
    gh_branch: 'master', // Github branch, 'wiki' for Github wiki or empty
    // menu_page: 'SUMMARY.md', // Page to display menu
    default_page: 'README.md' // Page loaded by default
},  {
    docname: 'guide_publi_raster',
    description: 'Guide publication rasters.',
    // Elements to display
    header: false, // Display header
    footer: false, // Display footer
    sidebar: false, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "Guide CIGAL", // HTML page name
    project_name: "Guide CIGAL", // Project name
    slogan: "Guide publication rasters", // Slogan
    copyright: '&copy 2016 <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/cigalsace/documentation', // Footer Github link
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:guillaume.ryckelynck@region-alsace.eu', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: 'guide_prepa_publication_raster', // Default lang for GitBook
    langs: [], // Languages for GitBook
    gh_user: 'cigalsace', // Github user or empty
    gh_repos: 'documentation', // Github repos or empty
    gh_branch: 'master', // Github branch, 'wiki' for Github wiki or empty
    // menu_page: 'SUMMARY.md', // Page to display menu
    default_page: 'README.md' // Page loaded by default
},{
    docname: 'guide_telecharger_donnees_image_opendata',
    description: 'Guide téléchargement open data.',
    // Elements to display
    header: false, // Display header
    footer: false, // Display footer
    sidebar: false, // Display sidebar
    display_page_url: true, // Display page_url

    // Main variables
    title: "Guide CIGAL", // HTML page name
    project_name: "Guide CIGAL", // Project name
    slogan: "Guide téléchargement ftp", // Slogan
    copyright: '&copy 2017 <a href="https://www.cigalsace.org">CIGAL</a>.', // Copyright

    // Footer links
    github_href: 'https://github.com/cigalsace/documentation', // Footer Github link
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:guillaume.ryckelynck@region-alsace.eu', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: 'guide_telecharger_donnees_image_opendata', // Default lang for GitBook
    langs: [], // Languages for GitBook
    gh_user: 'cigalsace', // Github user or empty
    gh_repos: 'documentation', // Github repos or empty
    gh_branch: 'master', // Github branch, 'wiki' for Github wiki or empty
    // menu_page: 'SUMMARY.md', // Page to display menu
    default_page: 'README.md' // Page loaded by default
},{
    docname: 'cadastrapp_wiki_user',
    description: 'Wiki du module geOrchestra "CadastrApp".',
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
    about_page: 'pages/about.html', // Footer about page
    contact_href: 'mailto:...', // Footer contact link

    // URL elements
    file_ext: 'md', // Extention of Markdown files
    main_url: 'https://raw.githubusercontent.com/', // Main URL
    lang: '', // Default lang for GitBook
    gh_user: 'georchestra', // Github user or empty
    gh_repos: 'cadastrapp', // Github repos or empty
    gh_branch: 'wiki/Guide-Utilisateur', // Github branch, 'wiki' for Github wiki or empty
    menu_page: '_Sidebar.md', // Page to display menu
    default_page: 'Home.md' // Page loaded by default
}];

var proxy_url = './php/index.php'; // URL of proxy for cross-domain

var help_page = 'pages/help.html'; // Help page
