export default function appendToEachArrayValue(array, appendString) {
  const newlist = [];
  for (const x of array) {
    newlist.push(appendString + x);
  }

  return newlist;
}
