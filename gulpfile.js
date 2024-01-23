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
* Exports
*/
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.init = uswds.init;
exports.copyAssets = uswds.copyAssets;
exports.updateUswds = uswds.updateUswds;
