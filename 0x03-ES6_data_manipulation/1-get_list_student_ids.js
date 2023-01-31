const getListStudentIds = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((studentid) => studentid.id);
  }
  return [];
};
export default getListStudentIds;
