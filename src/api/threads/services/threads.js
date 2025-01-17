'use strict';

/**
 * threads service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::threads.threads');
