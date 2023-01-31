/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (!Number.isInteger(length)) throw new TypeError('length must be a number');
    if (!Array.isArray(students)) throw new TypeError('students type must be an Array');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') throw new TypeError('name must be a string');
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (!Number.isInteger(value)) throw new TypeError('length must be an integer');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) throw new TypeError('students type must be an array ');
    this._students = value;
  }
}
