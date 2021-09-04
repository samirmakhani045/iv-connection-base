/**
 * flatten
 * Convert a nested object into a single depth object
 *
 * @param {Object} obj Nested object to be flattened
 * @param {String} delimiter Delimiter string, by default '.'
 * @returns {Object} Single depth object
 */
export const flatten = (obj, delimiter = '.') => {
  if (!isObject(obj)) return obj;

  let output = {};

  for (const [keyObj, valueObj] of Object.entries(obj)) {
    if (isObject(valueObj)) {
      const flatObj = flatten(valueObj);

      for (const [key, value] of Object.entries(flatObj)) {
        output[`${keyObj}${delimiter}${key}`] = value;
      }
    } else {
      output[keyObj] = valueObj;
    }
  }

  return output;
};

const isObject = (obj) => {
  const objType = Object.prototype.toString.call(obj);
  return objType === '[object Object]' || objType === '[object Array]';
};
