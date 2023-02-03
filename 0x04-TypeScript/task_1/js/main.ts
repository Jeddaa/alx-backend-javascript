// task 1
interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [thisCanBeAnyName: string]: any //the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);

// task 2
interface Directors extends Teacher {
    numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// task 3
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${Array.from(firstName)[0]}. ${ lastName}`;

const printy = printTeacher('john', 'Doe')
console.log(printy)

// task 4
interface StudentClassconstructor {
    firstName: string,
    lastName: string
}

interface StudentClass {
    workOnHomework(): string,
    displayName(): string
}

class StudentClass implements StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName(): string
    {
        return `${this.firstName}`;
    }
}

const std = new StudentClass('John', 'Doe');
console.log(std.displayName());
console.log(std.workOnHomework());



