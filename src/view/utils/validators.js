export const isJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (ex) {
    return false;
  }
};

export const isSingleDataElementToken = value => /^%([^%]+)%$/.exec(value) !== null;

export const isNumber =
  value => (!Number.isNaN(value) && (typeof value !== 'string' || value.trim().length > 0));

export const isPositiveNumber = (value, includeZero) => {
  const lowerBound = includeZero ? 0 : 1;
  return isNumber(value) && Number(value) >= lowerBound;
};

