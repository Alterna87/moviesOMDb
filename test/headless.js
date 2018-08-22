global.window = global;
global.assert = require('chai').assert; // Requiere las asersiones de chai
require('../src/assets/js/data'); // indica el archivo que vamos a testear
require('./data.spec.js'); // archivo con que voy a testear
