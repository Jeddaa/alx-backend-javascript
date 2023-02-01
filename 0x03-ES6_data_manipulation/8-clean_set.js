export default function cleanSet(set, startString) {
  const result = [];
  if (startString === '' || typeof (startString) !== 'string') {
    return '';
  }
  for (const i of set) {
    if (i.startsWith(startString)) result.push(i.slice(startString.length));
  }
  return result.join('-');
}
