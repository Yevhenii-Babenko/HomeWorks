const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];


/* 
1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
*/
// const { subjects } = students[0];

function getSubjects(studentsSubjects) {
    const { subjects } = studentsSubjects;
    const keys = Object.keys(subjects).map(a => a.slice(0, 1).toUpperCase() + a.slice(1));
    return keys.map((item) => item.replace('_',' '))
}
document.writeln(`<p style="margin:0; padding:0">1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл</p> <br> 
<p style="margin:0; padding:0; color:green">Результат виклику функції getSubjects(students[0]) : ${JSON.stringify(getSubjects(students[0]))} </p><br>`)

/* 
2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) 
*/

function getAverageMark(studentMarks) {
    const { subjects } = studentMarks;
    return (Object.values(subjects).flatMap(x => x).reduce((a, b) => a + b, 0) /  Object.values(subjects).flatMap(x => x).length).toFixed(2)
}

document.writeln(`<p style="margin:0; padding:0">2. Створіть функцію getAverageMark(students[0]) --> 3.79 – 
яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку.
Можна використовувати функції, написані у попередніх домашніх завданнях :) </p> <br> 
<p style="margin:0; padding:0; color: #ED4C5C">Результат виклику функції getAverageMark(students[0]) : ${getAverageMark(students[0])}</p><br>`);

/*
3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). Повинна бути виведена інформація: курс, ім'я, середня оцінка. 
*/

function getStudentInfo(selectedStudent) {
    let { course, name } = selectedStudent;
    return JSON.stringify({
        course,
        name,
        averageMark: getAverageMark(selectedStudent)
    });
}
document.writeln(`<p style="margin:0; padding:0">3. 
Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому
студенту (вам знадобиться функція з попереднього завдання). Повинна бути виведена інформація: курс, ім'я, середня оцінка. Результат виклику функції getStudentInfo() : ${getStudentInfo(students[0])}</p><br>`);

/* 
4. Створіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку. 
*/

function getStudentsNames(studentlist) {
    return studentlist.map(studentFromList => studentFromList.name).sort();
    // .sort((a, b) => a.localeCompare(b));
}
document.writeln(`<p style="margin:0; padding:0">4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку</p> <br> 
<p style="margin:0; padding:0; color: #097961">Результат виклику функції getStudentsNames(): ${JSON.stringify(getStudentsNames(students))} - відсортований масив імен студентів у алфавітному порядку</p><br>`);

/*
5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
*/
function getBestStudent(studentsList) {
    const studlistWithObj = studentsList.map((student) => ({
        name: student.name,
        marks: getAverageMark(student),
    }));
    const bestStudentMark = studlistWithObj.reduce((acc, item) => ({
        name: item.name,
        maxMark: Math.max(...studlistWithObj.map(studMark => studMark.marks))
    }));
    return bestStudentMark.name;
}
// console.log(getBestStudent(students))
document.writeln(`<p style="margin60; padding:0">5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
Результат виклику функції getBestStudent(students): ${JSON.stringify(getBestStudent(students))}</p><br>`);

/* 

Привіт)
різними шляхами можна зробити, можеш визначити найбільшу averageMark, потім знайти індекс цього елемента, і вивести імя елемента певного індексу

можна відсортувати кращі оцінки і вивести імя першого елементу

є варіант знайти кращого студента за допомогою метода .reduce
*/
