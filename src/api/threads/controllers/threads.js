'use strict';

/**
 * threads controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::threads.threads');
