/**
 * this module contains all bussines functions for EconomicsIndicators routes
 * @author Jonathan Rozo <jonathan.rozo@gmail.com>
 * @version 1.0.0
 */
const express = require('express');
const request = require('request');

const app = express();

const urlBase = 'https://www.indecon.online/';

/**
 * @descriptor API que entrega los últimos valores de todos los elementos
 * @baseurl urlBase/last
 * @returns {Object Json}
 */
const PP = app.get('/last',(req, res) => {
    let last = req.url;
    request({
        url: urlBase + last,
        json: true
        }, (err, resp) => {
            if (err) {
                return res.status(500).json({
                    ok:false,
                    err
                });
            }
            if (resp.statusCode !== 200) {
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
            const indicators = resp.body;
            res.send({
                ok: true,
                indicators
            });
    });
});

/**
 * @descriptor API que entrega todos los valores de un elemento particular
 * @baseurl urlBase/values
 * @urlParams urlBase/values/:key
 * @returns {Object Json}
 */
app.get('/values/:key', (req, res) => {
    let keyDate = req.url;
    request({
        url: urlBase + keyDate,
        json: true
        }, (err, resp) => {
            if (err) {
                return res.status(500).json({
                    ok:false,
                    err
                });
            }
            if (resp.statusCode !== 200) {
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
            const indicators = resp.body;
            res.send({
                ok: true,
                indicators
            });
    });
});

/**
 * @descriptor API que entrega todos los valores de un elemento particular
 * @baseurl urlBase/date/,
 * @urlParams urlBase/date/:key/:date,
 * @returns {Object Json}
 */
app.get('/date/:key/:date', (req, res) => {
    let key = req.url;
    request({
        url: urlBase + key,
        json: true
        }, (err, resp) => {
            if (err) {
                return res.status(500).json({
                    ok:false,
                    err
                });
            }
            if (resp.statusCode !== 200) {
                return res.status(400).json({
                    ok:false,
                    err
                });
            }
             const indicators = resp.body;
            res.send({
                ok: true,
                indicators
            });
    });
});

module.exports = app;