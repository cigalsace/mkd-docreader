//----------------------------------------------------------------------------
// app.js
//----------------------------------------------------------------------------

// showdown configuration
showdown.setOption('noHeaderId', true);
showdown.setOption('parseImgDimensions', true);
showdown.setOption('headerLevelStart', 1);
showdown.setOption('simplifiedAutoLink', true);
showdown.setOption('literalMidWordUnderscores', true);
showdown.setOption('strikethrough', true);
showdown.setOption('tablesHeaderId', true);
showdown.setOption('ghCodeBlocks', true);
showdown.setOption('tasklists', true);
showdown.setOption('tables', true);

console.log(showdown.getOptions());

// Main module
angular
    .module('app', ['ui.bootstrap', 'ngSanitize']);

angular.module('app')
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    });
