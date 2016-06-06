/**
 * Track data to segment.
 */
const config = require('../config');
const Analytics = require('analytics-node');
const analytics = new Analytics(config.get('segment.key'), {
  flushAt: config.get('segment.flushAt'),
  flushAfter: config.get('segment.flushAfter')
});

/**
 * Track a plain JS object to segment.
 */
module.exports = function(message) {
  try {
    if (message.userId || message.ananoymousId) {
      analytics.track(message);
      console.log(`${message.event} by ${message.userId || message.ananoymousId}`);
    }
  } catch (e) {
    console.error('Unexpected error!');
  }
};
