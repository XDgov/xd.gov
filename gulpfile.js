/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

const uswds = require("@uswds/compile");

/**
* USWDS version
*/
uswds.settings.version = 3;

/**
* Path settings
*/
uswds.paths.dist.css = './assets/uswds/css';
uswds.paths.dist.theme = './sass/uswds';

/**
* Exports
*/
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.copyAssets = uswds.copyAssets;
exports.updateUswds = uswds.updateUswds;
