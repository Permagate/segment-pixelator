/**
 * Safe fetch nested value from an object.
 */
module.exports = (obj, key) => {
  let result = Object.assign({}, obj);

  if (key) {
    const keys = key.split('.');
    result = keys.reduce((value, key) =>
      (value || {})[key]
    , result);
  }

  return result;
};
