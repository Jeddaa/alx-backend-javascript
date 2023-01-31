const getStudentsByLocation = (arr, city) => {
  const filterobj = arr.filter((studentLocation) => studentLocation.location === city);
  return filterobj;
};

export default getStudentsByLocation;
