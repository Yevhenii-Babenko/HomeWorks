const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


document.writeln('All the tasks of this homework are shown into console --->')

//1 task Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

const getPair = [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
document.writeln(`<div>
<p>1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];</p>
<p>Результат: ${JSON.stringify(getPair)}</p></div>`);

//2 task Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

 function getPairsAndThemes(array1, array2) {
    const result = [];
    for(let index=0; index < array1.length && array2.length; index++){
        result.push([array1[index].join(' i '), array2[index]])
    }
    return result
}
console.log(getPairsAndThemes(getPair, themes));
document.writeln(`<div><p>2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]</p>
<p>Результат: ${JSON.stringify(getPairsAndThemes(getPair, themes))}</p></div>`);

//3 task Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function putMarksForStudent(array1, array2) {
    let evaluationArray = [];
    for(let index=0; index < array1.length && array2.length; index++){
        evaluationArray.push([array1[index], array2[index]])
    }
    return evaluationArray
}
console.log(putMarksForStudent(students, marks))
// console.log(`This function matches single student's name with an array of marks: ${putMarksForStudent(students, marks)}`)

//4 task Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function randomMark(array1, array2) {

    let ourResult = [];
    let randomMArk = Math.floor(Math.random() * array2.length)

    for(let index=0; index < array1.length; index++){
        ourResult.push(array1[index]);
        if (randomMArk != 0) {
            ourResult[index].push(randomMArk);
        } else {
            ourResult[index].push(randomMArk + 1);
        }
    }
  
    return ourResult;
}
document.writeln(`<div><p>4 task Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
<p>Результат: ${JSON.stringify(randomMark(getPairsAndThemes(getPair, themes), marks))}</p></div>`);
 //console.log(`This function marks random avaluation for student's couples ${(randomMark(getPairsAndThemes(students, themes), marks)).join(', ')}`)
