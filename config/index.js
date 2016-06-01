/**
 * Configuration file.
 */
const fetch = require('../utils/fetch');

const config = {
  port: process.env.PORT || 3000,
  segment: {
    key: process.env.SEGMENT_KEY,
    flushAt: Number(process.env.SEGMENT_MAX_MESSAGES) || 20,
    flushAfter: Number(process.env.SEGMENT_MAX_WAIT) || 10000,
  },
};

module.exports = {
  get: fetch.bind(null, config),
};
