// index.js

$(document).ready(function() {

    //--------------------------------------------------------------
    // Display header, footer and sidebar
    //--------------------------------------------------------------

    if (config.header) {
        $("#header").removeClass("hidden");
        $("body").css('padding-top', '70px');
    }
    if (config.footer) {
        $("#footer").removeClass("hidden");
        $("body").css('padding-bottom', '70px');
    }
    if (config.sidebar) {
        $("#sidebar").removeClass("hidden");
        $("#content").addClass("col-sm-9");
    }
    if (config.display_page_url) {
        $("#page_url").removeClass("hidden");
    }

    //--------------------------------------------------------------
    // Load variables values
    //--------------------------------------------------------------

    $("title").html(config.title);
    $("#project_name").html(config.project_name);
    $("#slogan").html(config.slogan);
    $("#copyright").html(config.copyright);

    $("#contact").attr('href', config.contact_href);
    $("#about").attr('href', config.about_href);
    $("#github").attr('href', config.github_href);

    //--------------------------------------------------------------
    // Toggle off canvas
    //--------------------------------------------------------------

    $('[data-toggle="offcanvas"]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });

    //--------------------------------------------------------------
    // load content
    //--------------------------------------------------------------

    // showdown.js configuration
    showdown.setOption('noHeaderId', false);
    showdown.setOption('parseImgDimensions', true);
    showdown.setOption('headerLevelStart', 1);
    showdown.setOption('simplifiedAutoLink', true);
    showdown.setOption('literalMidWordUnderscores', true);
    showdown.setOption('strikethrough', true);
    showdown.setOption('tablesHeaderId', true);
    showdown.setOption('ghCodeBlocks', true);
    showdown.setOption('tasklists', true);

    // Function to get GitHub URL
    function getUrl(main_url, gh_user, gh_repos, gh_branch, gh_page) {
        var url;
        if (gh_branch) {
            if (gh_branch == 'wiki') {
                url = main_url + gh_branch + '/' + gh_user + '/' + gh_repos + '/' + gh_page;
            } else {
                url = main_url + gh_user + '/' + gh_repos + '/' + gh_branch + '/' + gh_page;
            }
        } else {
            url = main_url + gh_page;
        }
        // Check for file extension
        if (url.substr(url.lastIndexOf('.') + 1) != config.file_ext) {
            url = url + '.' + config.file_ext;
        }
        return url;
    }

    // Function to get page
    function getPage(proxy_url, gh_full_url, div, hash) {
        $.post({
            url: proxy_url,
            data: {
                url: gh_full_url
            },
            success: function(data) {
                var converter = new showdown.Converter();
                    content = converter.makeHtml(data.content);

                // Change image soource URL to get GitHub images from repos
                var re = /src="https:\/\/github.com(.*)\/blob\/(.*)" /gi;
                content = content.replace(re, 'src="https://raw.githubusercontent.com$1/$2" ');

                // Add id to headers
                // Not use: use showdown.js automatic id
                /*
                re = /<h2>(.*)<\/h2>/gi;
                var match = re.exec(content);
                var i = 1;
                while (match !== null) {
                    content = content.replace('<h2>' + match[1] + '</h2>', '<h2 id="' + match[1].toLowerCase() + '">' + match[1] + '</h2>');
                    match = re.exec(content);
                    i += 1;
                }
                */

                $(div).html(content);
                if (hash) {
                    $('html,body').animate({
                        scrollTop: $('#' + hash).offset().top - 70
                    }, 500);
                }
            },
            error: function(data) {
                $('#content').html('Content page "' + gh_full_url + '" not found.');
            },
            complete: function(data) {
                var page_url = '<em>Page: <a href="' + gh_full_url + '" class="local" target="_blank">' + gh_full_url + '</a></em>';
                $("#page_url").html(page_url);
            }
        });
        return false;
    }

    gh_menu_url = getUrl(config.main_url, config.gh_user, config.gh_repos, config.gh_branch, config.lang + config.menu_page);

    // Load menu
    $.post({
        url: proxy_url,
        data: {
            url: gh_menu_url
        },
        success: function(data) {
            var converter = new showdown.Converter();
                content = converter.makeHtml(data.content);
            $('#sidebar').html(content);
        },
        error: function(data) {
            $('#sidebar').html('Menu page "' + config.gh_menu_url + '" not found.');
        },
        complete: function(data) {
            // console.log('Menu loaded.');
        }
    });

    // Load default_page
    var gh_content_url = getUrl(config.main_url, config.gh_user, config.gh_repos, config.gh_branch, config.lang + config.default_page);
    getPage(proxy_url, gh_content_url, '#content', '');

    // Load content on link clicked
    $('#page').on('click', 'a', function(event) {
        event.preventDefault();
        var url = $(this).attr('href');
        abs_url = /^(?:[a-z]+:)?\/\//i.test(url);
        if (abs_url) {
            var win = window.open(url, '_blank');
        } else {
            var page = encodeURI(decodeURIComponent(url.split("#")[0]));
            var hash = $(this).attr('href').split("#")[1];

            // Get page content
            gh_content_url = getUrl(config.main_url, config.gh_user, config.gh_repos, config.gh_branch, config.lang + page);
            getPage(proxy_url, gh_content_url, '#content', hash);
        }
        return false;
    });

});
