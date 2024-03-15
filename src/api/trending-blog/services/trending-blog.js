'use strict';

/**
 * trending-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trending-blog.trending-blog');
