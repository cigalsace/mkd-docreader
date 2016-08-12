function getParamsURL(url) {
    var variables = url.split('&');
    var params = {};
    for (var i in variables) {
        v = variables[i].split(/=(.+)?/); // Split only first "=" char
        params[v[0]] = decodeURIComponent(v[1]);
    }
    return params;
}
