'use strict';

/**
 * threads router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::threads.threads');
