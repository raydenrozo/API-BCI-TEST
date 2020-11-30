/**
 * this module contains all bussines functions for COEconomicsIndicators controller
 * @author Jonathan Rozo <jonathan.rozo@gmail.com>
 * @version 1.0.0
 */

const EconomicIndicator = require('../routes/economic-indicators');
const guard = require('../config/guard');

const getIndicators = () => {
    try {
        const _request = JSON.parse(request.httpParameterMap.requestBodyAsString);
    } catch (e) {

    }
};

const getIndicatorsByKey = () => {
    try {

    } catch (e) {

    }
};

const getIndicatorsByKeyAndDate = () => {
    try {

    } catch (e) {

    }
};
/**
* Web exposed methods
* @module COEconomicsIndicators
*/
module.exports = {
    GetIndicators: guard.ensure(['https', 'get'], getIndicators),
    GetIndicatorsByKey: guard.ensure(['https', 'get'], getIndicatorsByKey),
    GetIndicatorsByKeyAndDate: guard.ensure(['https', 'get'], getIndicatorsByKeyAndDate)
};