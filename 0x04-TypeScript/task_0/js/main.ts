interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Rexxie',
    lastName:'Portable', 
    age: 19,
    location: 'Lagos, Nigeria'};
const student2: Student = {
    firstName: 'Oluwadmailare', 
    lastName:'Sango', 
    age: 26, 
    location: 'Lagos, Nigeria'};

const studentList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    studentList.forEach((student) => {
        const row = document.createElement('tr');
        const firstnamecell = document.createElement('td');
        const locationcell = document.createElement('td');

        firstnamecell.textContent = student.firstName;
        locationcell.textContent = student.location;

        row.appendChild(firstnamecell);
        row.appendChild(locationcell);
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

renderTable();