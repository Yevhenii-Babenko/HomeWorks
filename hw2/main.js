
let getNumberN = Number(prompt("Put your number N here", "Number N")); //Отримайте у користувача число(N) від якого ми будемо складати

console.log(Number.isInteger(getNumberN)); // чи є передане значення N ЦІЛИМ числом

let getNumberM = Number(prompt("Put your number M here", "Number M")); //Отримайте у користувача число(M) до якого ми будемо складати (включно)

console.log(Number.isInteger(getNumberM)); //чи є передане значення M ЦІЛИМ числом

let isEvenPass = confirm("To pass event?"); //чи потрібно пропускати парні числа
console.log(isEvenPass);

/* 
const product =  prompt('What do You want to buy?');

if (product === "bread") {
    const priceOfBread = 20;

    const amountOfBread = prompt("How much to buy?");

    if(parseInt(amountOfBread) <= 0) {
        alert(`You can not buy ${parseInt(amountOfBread)} bread!`)
    } else {
        const currency = prompt("which currency?");
    
        if(currency === 'uah') {
            alert(`You need to pay ${parseInt(amountOfBread) * parseInt(priceOfBread)} uah`);
        } else if (currency === 'usd') {
            alert(`You need to pay ${((parseInt(amountOfBread) * priceOfBread) / 28).toFixed(1)} usd`);
        } else {
            alert('please, choose correct currensy')
        }
    }    
} 
*/
/*
const day = prompt("question?");
let result = day === "answer" ? 'something' : 'somebody';
//day === "answer" ? console.log('something') : console.log('somebody');
console.log(result)

switch (day) {
    case 'friday' :
    case 'tuesday' :
    case 'wednesday' :
        console.log('Good days!');
        break;
    case 'saturday' :
        console.log('saturday');
        break;
    case 'monday' :
        console.log('monday');
        break;
    default :
        console.log('day');
}
*/
//const day = prompt("question?");
//if (!day) {
//    console.log('Please specify a day');
//};

/** Operator || або */

//if (day === "friday" || day === "saturday" || day === "sunday") {
//    console.log('Weekends')
//}

/* Operator && I */
//const day = prompt("Day");
//const password = prompt("password"); 

/*if(number >= 10 && number <=20 && password === "1234") {
    console.log(`Number ${number} - is in 10-20 range`);
} else {
    console.log(`Number ${number} - is not 10-20 range`)
}
*/

//Prior of logic operators

//if((day === "friday" || day === "saturday") && password === "1234") {
//    console.log("Correct");
//} else {
//    console.log("Error");
//}

/* Loops */
/*while*/
//let day = prompt("Put day here")

//while (day !== 'friday') {
//    console.log('Wrong answer');
//    day = prompt('Put day here, try again!')
//}

//console.log('Right day!');

/** do/while loop */
/*
let day;
let attempts = 0;

do {
    day = prompt('your day in week?');
    attempts++;
    console.log(`${attempts} used`)
} while (day !== "friday" && attempts < 3);

if (attempts >= 3) {
    alert('end')
} else {
    alert('win'); 
}
console.log("correct")
*/

/* For loop */

/* for (let attempts = 0, day = ''; attempts < 3; attempts++) {
    day = prompt("The Best Day of the Week?")
    if (day === "friday") {
        console.log("correct");
        break;
    } else{
        console.log("wrong");
    }
} */

//const text = prompt("Enter text", "Text is here").toLowerCase();
//const letter = prompt("Enter letter", "Put you letter")


/*
let counter = 0;

for(let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    
    if (char === letter) {
        counter++;
    }
}

if (counter === 0) {
    console.log(`Symbol ${letter} is not exist in : ${text}`);
} else {
    console.log(`${counter} symbols ${letter} in the text`); 
}
*/

/* console.log(confirm("Yes or Not"))  */

/* const isButter = false;

if(isButter) {
    document.writeln("False");
} else {
    document.writeln("True")
} */

/* const userScore = prompt("Put you score here");

switch(true){
    case (userScore > 0 && userScore <= 10) : {
        document.writeln("Very Good!");
        break;
    }
    case (userScore > 10 && userScore <= 20) : {
        document.writeln("It is almost three!");
        break;
    }
    case (userScore > 20 && userScore <= 30) : {
        document.writeln("It is solid three!");
        break;
    }
    case (userScore > 30 && userScore <= 40) : {
        document.writeln("It is almost four");
        break;
    }
} */

/* const userAge = 90;
const ageString = userAge > 90 ? "Respect Age" : "You are young!";
document.writeln(ageString);

const defaultName = "q";
const userName = defaultName || defaultName.lenght > 1 ? defaultName : "Incognito";
document.writeln(userName);

const currency = "uah";
const currentCurrency = currency ? currency : "usd";
document.writeln(currentCurrency); */

/* const waffles = true;
const jam = true; 

const wafflesJam = waffles && jam;
if(waffles && jam) {
    document.writeln("We have something to in on dinner");
}

const pasta = true;
const souce = false;
const pastaWithCheeseSouce = pasta && souce;
if(pasta && souce) {
    document.writeln("message");
}

if(wafflesJam || pastaWithCheeseSouce) {
    document.writeln("Huh we have something to eat!")
} */



//цикл, який буде складати числа від раніше отриманих N и M



/* let sum = 0;
for (let i = 1; i <= getNumberN && getNumberM; i++) {
    sum = getNumberN + getNumberM;
    i++;
    if (isEvenPass != true) {
        sum += i;
        console.log(sum);
        break;
    } else {
        console.log("wrong");
    }
} */
