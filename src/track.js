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
    if (!message.event) {
      message.event = 'Opened Email';
    }

    const { event, userId } = message;
    delete message.event;
    delete message.userId;

    if (event && userId) {
      analytics.track({ event, userId, properties: message });
      console.log(`${event} by ${userId}`);
    }
  } catch (e) {
    console.error('Unexpected error!');
  }
};
