const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


document.writeln('All the tasks of this homework are shown into console --->')

//1 task Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs(pairs) {
    let menNames = [];
    let womenNames = [];
    let coupleOne = [];
    let coupleTwo = [];
    let coupleThree = [];

    for (let index = 0; index < pairs.length; index++) {
        if (pairs[index] === pairs[0]) {
            menNames.push(pairs[0]);
        } else if (pairs[index] === pairs[1]) {
            menNames.push(pairs[1]);
        } else if (pairs[index] === pairs[2]) {
            womenNames.push(pairs[2]);
        } else if (pairs[index] === pairs[3]) {
            womenNames.push(pairs[3]);
        } else if (pairs[index] === pairs[4]) {
            menNames.push(pairs[4]);
        } else {
            womenNames.push(pairs[5]);
        }
    }

    coupleOne.push(menNames[0], womenNames[0]);
    coupleTwo.push(menNames[1], womenNames[1]);
    coupleThree.push(menNames[2], womenNames[2]);

    function putCoupleToArray(one, two, fhree) {
        let getOurPairs = [];
        getOurPairs.push(one, two, fhree);
        return getOurPairs
    }

    return putCoupleToArray(coupleOne, coupleTwo, coupleThree);
}

console.log(`This fuction shows an array with sorted couple of students: ${getPairs(students)}`);

 
//2 task Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function getPairsAndThemes (array1, array2) {
    let studentsCople = [];
    let themesForEachPair = [];
    const result = [];

    studentsCople = Array.from(getPairs(array1));
    themesForEachPair = Array.from(array2);

    const firstPair = studentsCople[0];
    const secondPair = studentsCople[1];
    const thirdPair = studentsCople[2];
    
    const arr1 = new Array(firstPair.join(' i '), themesForEachPair[0])
    const arr2 = new Array(secondPair.join(' i '), themesForEachPair[1])
    const arr3 = new Array(thirdPair.join(' i '), themesForEachPair[2])

    result.push(arr1, arr2, arr3)
    //console.log(result)
    return result
}

console.log(`This function matches pairs of previous task with subject themes:  ${getPairsAndThemes(students, themes)}`)


//3 task Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function putMarksForStudent(array1, array2) {
    let evaluationArray = [];
    //let marksAndStudents = [];
   /*  for (let index = 0; index < (array1.length && array2.length); index++) {
        evaluationArray.push(array1[index], array2[index]);
        return marksAndStudents
    }

    console.log(evaluationArray) */

    const arr1 = [array1[0], array2[0]];
    const arr2 = [array1[1], array2[1]];
    const arr3 = [array1[2], array2[2]];
    const arr4 = [array1[3], array2[3]];
    const arr5 = [array1[4], array2[4]];
    const arr6 = [array1[5], array2[5]];
    evaluationArray.push(arr1, arr2, arr3, arr4, arr5, arr6);

    //console.log(evaluationArray);

    /* for (let index = 0; index < (array1.length && array2.length); index++){
        marksAndStudents[index] = (array1[index] + array2[index]);
        //return marksAndStudents;
    }
    console.log(marksAndStudents); */
    return evaluationArray
}

console.log(`This function matches single student's name with an array of marks: ${putMarksForStudent(students, marks)}`)

//4 task Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function randomMark (array1, array2) {
    
    let ourResult = [];
    let randomMArk = Math.floor(Math.random() * array2.length);
    
    for (let index = 0; index < array1.length; index++) {
        ourResult.push(array1[index]);
        if (randomMArk != 0) {
            ourResult[index].push(randomMArk);
        } else {
            ourResult[index].push(randomMArk + 1);
        }
    }
    return ourResult;
}
console.log(`This function marks random avaluation for student's couples ${(randomMark(getPairsAndThemes(students, themes), marks)).join(', ')}`)
