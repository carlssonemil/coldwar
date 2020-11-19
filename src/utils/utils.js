const roundToTwoDecimals = (num) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const convertToKebabCase = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
}

const groupBy = (list, keyGetter) => {
  const map = {};
  list.forEach(item => {
    const key = keyGetter(item);

    if (!map[key]) {
      map[key] = [item];
    } else {
      map[key].push(item);
    }
  });
  return map;
}

export { roundToTwoDecimals, convertToKebabCase, groupBy }