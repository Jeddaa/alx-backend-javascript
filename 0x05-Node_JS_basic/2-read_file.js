function countStudents(path) {
  // eslint-disable-next-line global-require
  const fs = require('fs');
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.toString().split('\n');
    const students = {};
    const fields = {};
    let linesLength = -1;
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i]) {
        linesLength += 1;
        const field = lines[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
          fields[field[3]] += 1;
        } else {
          fields[field[3]] = 1;
        }
      }
    }
    console.log(`Number of students: ${linesLength}`);
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
        // console.log(data);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
