// Load CSS files
require('./index.css');

// Load global scripts
global.jQuery = global.$ = require('jquery');
global.Popper = require('popper.js');
require('bootstrap');
global.Vue.options.delimiters = ['[[', ']]'];

// Load javascript files from assets
require('./assets/js');
