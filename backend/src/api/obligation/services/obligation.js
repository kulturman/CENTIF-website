'use strict';

/**
 * obligation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::obligation.obligation');
