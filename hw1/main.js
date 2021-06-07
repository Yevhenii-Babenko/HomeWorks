//Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345
let nokia = 15.678, 
    iPhone = 123.965,
    xiaomi = 90.2345;

document.writeln(`${nokia} ${iPhone} ${xiaomi}`);
//or console
console.log(`${nokia} ${iPhone} ${xiaomi}`);

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
let maxPrice = Math.max(nokia, iPhone, xiaomi);
document.writeln(`${maxPrice}`);

//or console
console.log(Math.max(nokia, iPhone, xiaomi))

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
let minPrice = Math.min(nokia, iPhone, xiaomi);
document.writeln(`${minPrice}`);

//or console
console.log(Math.min(nokia, iPhone, xiaomi));

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let totalAmount = nokia; 
totalAmount += iPhone; 
totalAmount += xiaomi;

document.writeln(totalAmount.toFixed(0));

/*Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.*/

let roundPrice = Math.floor(nokia);
roundPrice += Math.floor(iPhone);
roundPrice += Math.floor(xiaomi);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let roundToHundreds = Math.round((228 * 100) / 100);
console.log(roundToHundreds)

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

function OddOrEven(num) {
    return (num & 1) ? "false" : "true";
}

console.log(OddOrEven(roundPrice));


function isEven(num) {
    if (num % 2 == 0)
        return true;
    else
        return false;
}

console.log(isEven(roundPrice));

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
function remainder(x) {
    return x - totalAmount;
}

console.log(remainder(500))

document.writeln(500 - `${totalAmount}`)

//Виведіть середнє значення цін, округлене до другого знаку після коми
let averageAmount = totalAmount / 3;

console.log(averageAmount.toFixed(2))

//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).

let randomDiscount = Math.floor(Math.random() * 10);
//let discountPercent = randomDiscount + "%";

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let prices = [nokia, iPhone, xiaomi];  //задаємо масив із змінними ціни за товари

let randomItem = prices[Math.floor(Math.random() * 3)]; // змінну для пошуку рандомної ціни із масиву prices[]

console.log(randomItem * randomDiscount);

let discount = (randomItem * randomDiscount) / 100; // задаємо значення із рандомною знижкою для змінної 

console.log(discount.toFixed(2));

let disCleanPrice = randomItem - discount.toFixed(2);

let itemCost = randomItem / 2;

let netProfit = itemCost - disCleanPrice;

console.log(netProfit);
