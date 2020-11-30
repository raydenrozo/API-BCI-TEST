/**
 * this module contains rredirect init
 * @author Jonathan Rozo <jonathan.rozo@gmail.com>
 * @version 1.0.0
 */
const express = require('express');
const app = express();

app.use(require('./economic-indicators.js'));

module.exports = app;