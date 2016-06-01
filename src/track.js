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
 * Parse JSON data from base64-encoded string.
 * Then track it to segment.
 */
module.exports = function(data) {
  try {
    const dataString = Buffer.from(data, 'base64').toString('utf8');
    const message = JSON.parse(dataString);
    if (message.userId || message.ananoymousId) {
      analytics.track(message);
      console.log(`${message.event} by ${message.userId || message.ananoymousId}`);
    }
  } catch (e) {
    console.error('Unexpected error!');
  }
};
