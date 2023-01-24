export default function createIteratorObject(report) {
  const newList = [];
  for (const x of Object.values(report.allEmployees)) {
    newList.push(...x);
  }
  return newList;
}
