<?php
    // index.php

    //////////////////////////////////////////////////////////////////////////
    // CONFIG
    //////////////////////////////////////////////////////////////////////////

    // Default URL
    $config['url'] = '';


    //////////////////////////////////////////////////////////////////////////
    // HELPERS
    //////////////////////////////////////////////////////////////////////////

    // get()
    // Get query parameter
    function get($var=False, $default=False) {
        if ($var and isset($_GET[$var])) {
            return $_GET[$var];
        } else {
            return $default;
        }
    }

    // post()
    // Get post parameter
    function post($var=False, $default=False) {
        if ($var and isset($_POST[$var])) {
            return $_POST[$var];
        } else {
            return $default;
        }
    }

    // Get page url
    $url = get('url', False);
    if (! $url) {
        $url = post('url', $config['url']);
    }

    // Get page content
    $arrContextOptions=array(
        "ssl"=>array(
            "verify_peer"=>false,
            "verify_peer_name"=>false
        )
    );
    $data = @file_get_contents($url, false, stream_context_create($arrContextOptions));

    // Define default output
    $output = array(
        'success' => false,
        'url' => $url,
        'content' => "Erreur: le page ne peut pas être chargée."
    );

    if ($data) {
        // Generate output
        $output = array(
            'success' => true,
            'content' => $data
        );
    }

    // Encode and send JSON response
    header('Content-Type: application/json');
    echo json_encode($output);
