/**
 * this module contains all configs functions for API
 * @author Jonathan Rozo <jonathan.rozo@gmail.com>
 * @version 1.0.0
 */
require('./config/confiig');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors()) // Use this after the variable declaration

//Soporte for coded bodies
app.use(bodyParser.json());

//Soporte for coded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Global route configuration
app.use(require('../api-rest-server-bci/routes/index'));

app.listen(process.env.PORT, () => {
    console.log('Listening Port: ', process.env.PORT);
});