
let bootstrap = require('bootstrap');

global.bootstrap = window.bootstrap = bootstrap;

import app from './vue/instance';

require('./vue/components/__require');

app.mount('#app');
