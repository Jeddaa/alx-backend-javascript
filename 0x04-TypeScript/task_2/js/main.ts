// task 5
interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting a director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: (number | string)) => {
    if(Number.isInteger(salary) && (salary < 500))  return new Teacher();
    else return new Director();
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

//task 6
function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


// task 7
type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string => `Teaching ${todayClass}`;
console.log(teachClass('Math'));
console.log(teachClass('History'));