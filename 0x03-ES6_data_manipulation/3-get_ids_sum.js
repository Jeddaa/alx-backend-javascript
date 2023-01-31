const getStudentIdsSum = (arr) => {
  const reduceFunc = arr.reduce((acc, StudentList) => acc + StudentList.id, 0);

  return reduceFunc;
};
export default getStudentIdsSum;
