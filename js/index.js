// index.js

$(document).ready(function() {

    //--------------------------------------------------------------
    // Display header, footer and sidebar
    //--------------------------------------------------------------

    if (header) {
        $("#header").removeClass("hidden");
    }
    if (footer) {
        $("#footer").removeClass("hidden");
    }
    if (sidebar) {
        $("#sidebar").removeClass("hidden");
    }
    if (display_page_url) {
        $("#page_url").removeClass("hidden");
    }

    //--------------------------------------------------------------
    // Load variables values
    //--------------------------------------------------------------
    $("title").html(title);
    $("#project_name").html(project_name);
    $("#slogan").html(slogan);
    $("#copyright").html(copyright);

    $("#contact").attr('href', contact_href);
    $("#about").attr('href', about_href);
    $("#github").attr('href', github_href);

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
        if (url.substr(url.lastIndexOf('.') + 1) != file_ext) {
            url = url + '.' + file_ext;
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

    gh_menu_url = getUrl(main_url, gh_user, gh_repos, gh_branch, lang + menu_page);

    // Load menu
    $.post({
        url: proxy_url,
        data: {
            url: gh_menu_url
        },
        success: function(data) {
            var converter = new showdown.Converter();
                content = converter.makeHtml(data.content);
            $('#menu').html(content);
        },
        error: function(data) {
            $('#menu').html('Menu page "' + gh_menu_url + '" not found.');
        },
        complete: function(data) {
            // console.log('Menu loaded.');
        }
    });

    // Load default_page
    var gh_content_url = getUrl(main_url, gh_user, gh_repos, gh_branch, lang + default_page);
    getPage(proxy_url, gh_content_url, '#content', '');

    // Load content on link clicked
    $('body').on('click', 'a:not(.local)', function(event) {
        //$('a').click(function(event) {
        event.preventDefault();

        // var page = encodeURI($(this).attr('href').split("#")[0]);
        var page = encodeURI(decodeURIComponent($(this).attr('href').split("#")[0]));
        var hash = $(this).attr('href').split("#")[1];

        // Get page content
        gh_content_url = getUrl(main_url, gh_user, gh_repos, gh_branch, lang + page);
        getPage(proxy_url, gh_content_url, '#content', hash);
    });

});
