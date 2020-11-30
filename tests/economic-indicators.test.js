require('regenerator-runtime/runtime');
const request = require('supertest');
const apiEI = require('../apps/api-rest-server-bci/routes/economic-indicators');
describe('GET API Probando los diferentes indicadores economicos', () => {
    test('API que entrega los últimos valores de todos los elementos', async () => {
        const testJson = require('../tests/testJSON.json');
        const response = await request(apiEI).get('/last');
        expect(response.body).toEqual(testJson);
        expect(response.statusCode).toBe(200);
    });

    test('API que entrega todos los valores de un elemento particular (Probando Cobre)', async () => {
        const testJson1 = require('../tests/testJSON1.json');
        const key = 'cobre';
        const response = await request(apiEI).get('/values/'+key);
        expect(response.body).toEqual(testJson1);
        expect(response.statusCode).toBe(200);
    });

    test('API que entrega el valor de un elemento particular en una fecha en particular (Probando Cobre y fecha 02-01-2020)', async () => {
        const testJson2 = require('../tests/testJSON2.json');
        const key = 'cobre';
        const date = '02-01-2020'
        const response = await request(apiEI).get('/date/'+key+'/'+date);
        expect(response.body).toEqual(testJson2);
        expect(response.statusCode).toBe(200);
    });
});